// ==UserScript==
// @name		Karlizator
// @namespace	http://tampermonkey.net/
// @version		1.0.3
// @description	Translate webpages from hungarian to Karl
// @author		Bence DEMETER
// @match		http*://*/*
// @grant		none
// ==/UserScript==

const KARLIZATOR_JSONP_URL = "https://drive.google.com/uc?export=download&id=1INERNIG9sKocLot30auvGdshA5g7ldl5";

(function() {
	'use strict';

	window.karlization = function(tagTrans, wordTrans) {

		let karlizate = function(text) {
			for (let key in wordTrans) {
				if (wordTrans.hasOwnProperty(key)) {
					let rx = new RegExp(key, 'g');
					let rx2 = new RegExp(key.substring(0, 1).toUpperCase() + key.substring(1), 'g');
					let mire = wordTrans[key].substring(0, 1).toUpperCase() + wordTrans[key].substring(1);
					text = text.replace(rx, wordTrans[key]).replace(rx2, mire);
				}
			}
			for (let key in tagTrans) {
				if (tagTrans.hasOwnProperty(key)) {
					let rx = new RegExp(key + '([\ \W\n\.,:;?!<"”)]+)', 'gi');
					text = text.replace(rx, tagTrans[key] + '$1').replace(new RegExp(key + '$'), tagTrans[key]);
				}
			}
			return text;
		};

		let walkDiv = function(el, fn) {
			for (let i = 0, len = el.childNodes.length; i < len; i++) {
				let node = el.childNodes[i];
				if (node.nodeType === 3) {
					fn(node);
				} else if (node.nodeType === 1 && node.nodeName !== "SCRIPT") {
					walkDiv(node, fn);
				}
			}
		};

		walkDiv(document.getElementsByTagName('body')[0], function(node) {
			let parent = node.parentNode;
			let newText = karlizate(node.data);
			let newNode = document.createTextNode(newText);
			parent.insertBefore(newNode, node);
			parent.removeChild(node);
		});
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
