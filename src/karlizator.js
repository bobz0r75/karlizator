// ==UserScript==
// @name		Karlizator
// @namespace	http://tampermonkey.net/
// @version		1.1-SNAPSHOT
// @description	Translate webpages from hungarian to Karl
// @author		Bence DEMETER
// @match		http*://*/*
// @grant		none
// ==/UserScript==

const KARLIZATOR_JSONP_URL = "https://drive.google.com/uc?export=download&id=11HM-75X2IPG_8by5FvR6e0MO674Msikt";

(function() {
	'use strict';

	window.karlization = function(tagTrans, wordTrans) {

		let karlizate = function(text) {
			for (let entry of wordTrans) {
				let rx = new RegExp(entry.key, 'g');
				let rx2 = new RegExp(entry.key.substring(0, 1).toUpperCase() + entry.key.substring(1), 'g');
				let mire = entry.value.substring(0, 1).toUpperCase() + entry.value.substring(1);
				text = text.replace(rx, entry.value).replace(rx2, mire);
			}
			for (let entry of tagTrans) {
				let rx = new RegExp(entry.key + '([\ \W\n\.,:;?!<"”)]+)', 'gi');
				text = text.replace(rx, entry.value + '$1').replace(new RegExp(entry.key + '$'), entry.value);
			}
			return text;
		};

		let handleNode = function(node, func, backFunc) {
			if (node.nodeType === Node.TEXT_NODE) {
				func(node);
			} else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== "SCRIPT") {
				backFunc(node, func);
			}
		};

		let walkDiv = function(el, func) {
			for (let i = 0, len = el.childNodes.length; i < len; i++) {
				let node = el.childNodes[i];
				handleNode(node, func, walkDiv);
			}
		};

		let replaceNodeText = function(node) {
			let parent = node.parentNode;
			let newText = karlizate(node.data);
			let newNode = document.createTextNode(newText);
			parent.insertBefore(newNode, node);
			parent.removeChild(node);
		};

		walkDiv(document.getElementsByTagName('body')[0], replaceNodeText);
	};

	if (window === window.top) {
		let button = document.createElement('button');
		button.innerText = 'KARLIZATE!';
		button.setAttribute('style', 'position:fixed;top:5px;left:5px;z-index:999999;padding:5px;background-color:#333333;color:#F0F0F0;border:3px solid #F80;font-weight:bold');
		button.addEventListener('click', function() {
			let script = document.createElement("script");
			script.setAttribute('type', 'text/javascript');
		    script.setAttribute('src', KARLIZATOR_JSONP_URL);
		    document.body.appendChild(script);
		}, {});
		document.getElementsByTagName('body')[0].appendChild(button);
	}

})();
