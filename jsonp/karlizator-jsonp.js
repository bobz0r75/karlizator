const tagTranslation = {
	"ból" : "búl",
	"ből" : "bűl",
	"tól" : "túl",
	"től" : "tűl",
	"ról" : "rúl",
	"ről" : "rűl",
	"ban" : "ba'",
	"ben" : "be'",
	"olna" : "óna",
	"olni" : "óni"
};

const wordTranslation = {
	",[\ ]*hogy[\ ]+" : ", ",
	"[\ ]+a[\ ]+" : " ",
	"[\ ]+az[\ ]+" : " ",
	"kintről" : "kintrünnen",
	"bentről" : "bentrünnen",
	"fentről": "fentrünnen",
	"lentről": "lentrünnen",
	"távolról" : "távolrünnen",
	"otthonról" : "otthonrünnen",
	"onnan" : "onnen",
	"valóban" : "kúvára",
	"nem nagyon": "kúvára nem",
	"nagyon" : "kúvára",
	"ténylegesen" : "kúvára",
	"kurvára": "kúvára",
	"volt" : "vót",
	"melyik" : "mék",
	"repes" : "rebezsg",
	"telepít" : "telepet",
	"fennáll" : "feláll",
	"cifrább" : "cifrasabb",
	"megcsúszt" : "megsiklott",
	"megcsúsz" : "megsikl",
	"csúsztat" : "csuszatat",
	"csúsztatás": "csuszatatát",
	"diskurzus" : "diszklúzus",
	"gyűlés" : "gyülekezet",
	"nyakatekert" : "nyakakevert",
	"bonyolult" : "anyacsavart",
	"ellentmondásos": "anyacsavart",
	"karöltve" : "karolva",
	"lángész" : "agylángész",
	"csavaros[\ ]+": "nyakakevert ",
	"nem tartja be": "leszarja",
	"egyik percről" : "egyrül percrül",
	"egyik óráról": "egyrül órárul",
	"egyik napról" : "egyrül naprul",
	"egyik hónapról" : "egyrül hónaprul",
	"egyik hétről": "egyrül hétrül",
	"egyik évről": "egyrül évrül",
	"farigcsál" : "faridzsgál",
	"farag" : "faridzsgál",
	"kalapál" : "kalimpál",
	"megcsinált": "kikalimpált",
	"megcsinál": "kikalimpál",
	"csinál" : "kalimpál",
	"meghalt" : "meghót",
	"nem rossz gondolat": "nem rossz hülyeség",
	"nem hülyeség": "nem rossz hülyeség",
	"google": "gugle",
	"mikorra": "mikorára",
	"tudom": "vágom",
	"dolg": "dóg",
	"voln": "vón",
	"felét": "felit",
	"nyolc": "nyóc",
	"szolg": "szóg",
	"self-signed": "szemszájf",
	"self signed": "szemszájf",
	"mitévő legyek": "mi legyek tévő",
	"mitévők legyünk": "mi legyünk tévő",
	"foglalás": "foglalkozás",
	"bamboo": "bambó",
	"GDPR": "dzsidipidi",
	"tevékeny": "tevény",
	"authentik": "autintik",
	"faramuci": "furamaci",
	"furcsa": "furamaci",
	"elégedve": "elégedett",
	"ordenáré": "ordibári",
	"akkor[\ ]+": "akkó ",
	"tudott": "tudatot",
	"tapogat": "taperol",
	"csillag": "csillár",
	"nyilván[\ ]+": "nyívánvalóan ",
	"cizellál": "cecilál",
	"gyakoriság": "orgyilkosság",
	" a gyakoriság": " az orgyilkosság",
	"robusztus": "robosztikus",
	"robosztus": "robosztikus",
	"lebegőpont": "levegőpont",
	"nem vész el, csak átalakul": "nem vész el, csak elrohad ott, ahol van",
	"elromlott": "elrosszult",
	"elromlik": "elrosszul",
	"jelentkez": "jelenez",
	"időintervallum": "ablakintervallum",
	"időablak": "ablakintervallum",
	"kerek perec": "keret perec",
	"kontár": "kantár"
};

karlization(tagTranslation, wordTranslation);