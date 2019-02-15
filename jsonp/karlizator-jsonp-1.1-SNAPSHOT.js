let tagTranslation = [
    { "key": "ból", "value": "búl" },
    { "key": "ből", "value": "bűl" },
    { "key": "tól", "value": "túl" },
    { "key": "től", "value": "tűl" },
    { "key": "ról", "value": "rúl" },
    { "key": "ről", "value": "rűl" },
    { "key": "ban", "value": "ba'" },
    { "key": "ben", "value": "be'" },
    { "key": "olna", "value": "óna" },
    { "key": "olni", "value": "óni" }
];

let wordTranslation = [
    { "key": ",[\ ]*hogy[\ ]+", "value": ", " },
    { "key": "[\ ]+a[\ ]+", "value": " " },
    { "key": "[\ ]+az[\ ]+", "value": " " },
    { "key": " a gyakoriság", "value": " az orgyilkosság" },
    { "key": "akkor[\ ]+", "value": "akkó " },
    { "key": "autentik", "value": "autintik" },
    { "key": "authentik", "value": "autintik" },
    { "key": "az egész univerzumot", "value": "minden univerzumot" },
    { "key": "bamboo", "value": "bambó" },
    { "key": "bármi kérdés van", "value": "bármit kérdés" },
    { "key": "beállítás", "value": "bestialitás" },
    { "key": "bentről", "value": "bentrünnen" },
    { "key": "bonyolult", "value": "anyacsavart" },
    { "key": "cifrább", "value": "cifrasabb" },
    { "key": "cizellál", "value": "cecilál" },
    { "key": "cross site scripting", "value": "kroszkripszkrájt" },
    { "key": "csavaros[\ ]+", "value": "nyakakevert " },
    { "key": "csillag", "value": "csillár" },
    { "key": "csinál", "value": "kalimpál" },
    { "key": "csúsztatás", "value": "csuszatatát" },
    { "key": "csúsztat", "value": "csuszatat" },
    { "key": "diskurzus", "value": "diszklúzus" },
    { "key": "dolg", "value": "dóg" },
    { "key": "döcögősen", "value": "döcösön" },
    { "key": "döcögve", "value": "döcösön" },
    { "key": "egyik évről", "value": "egyrül évrűl" },
    { "key": "egyik hétről", "value": "egyrül hétrűl" },
    { "key": "egyik hónapról", "value": "egyrül hónaprúl" },
    { "key": "egyik napról", "value": "egyrül naprúl" },
    { "key": "egyik óráról", "value": "egyrül órárúl" },
    { "key": "egyik percről", "value": "egyrül percrűl" },
    { "key": "elégedve", "value": "elégedett" },
    { "key": "ellentmondásos", "value": "anyacsavart" },
    { "key": "elmúlt", "value": "homályba ment" },
    { "key": "elmúlik", "value": "homályba megy" },
    { "key": "elromlani", "value": "elrosszulni" },
    { "key": "elromlik", "value": "elrosszul" },
    { "key": "elromlott", "value": "elrosszult" },
    { "key": "farag", "value": "faridzsgál" },
    { "key": "faramuci", "value": "furamaci" },
    { "key": "farigcsál", "value": "faridzsgál" },
    { "key": "felét", "value": "felit" },
    { "key": "felvitte az Isten a dolgát", "value": "felvitte az Isten lábát" },
    { "key": "fennáll", "value": "feláll" },
    { "key": "fentről", "value": "fentrünnen" },
    { "key": "foglalás", "value": "foglalkozás" },
    { "key": "furcsának", "value": "furamacinak"},
    { "key": "furcsán", "value": "furamacisan"},
    { "key": "furcsa", "value": "furamaci" },
    { "key": "garázscég", "value": "varázscég" },
    { "key": "GDPR", "value": "dzsidipidi" },
    { "key": "google", "value": "gugle" },
    { "key": "gyakoriság", "value": "orgyilkosság" },
    { "key": "gyártani", "value": "kalimpálni" },
    { "key": "gyárt", "value": "kalimpál" },
    { "key": "gyártott", "value": "kalimpált" },
    { "key": "gyűlés", "value": "gyülekezet" },
    { "key": "herót", "value": "heród" },
    { "key": "időablak", "value": "ablakintervallum" },
    { "key": "időintervallum", "value": "ablakintervallum" },
    { "key": "intervallum", "value": "ablakintervallum" },
    { "key": "jelentkez", "value": "jelenez" },
    { "key": "jobban", "value": "még kúvábbra" },
    { "key": "kalapál", "value": "kalimpál" },
    { "key": "kapcsolatban", "value": "kapcsán" },
    { "key": "karöltve", "value": "karolva" },
    { "key": "kellőképpen", "value": "kellőképesen" },
    { "key": "kerek perec", "value": "keret perec" },
    { "key": "keresztül kasul", "value": "keresztbe kasuba" },
    { "key": "keresztül-kasul", "value": "keresztbe kasuba" },
    { "key": "kiigazod", "value": "kiigazolód" },
    { "key": "kintről", "value": "kintrünnen" },
    { "key": "koncentrál", "value": "koncertrál" },
    { "key": "konszenzus", "value": "konzesus" },
    { "key": "kontár", "value": "kantár" },
    { "key": "következményeket", "value": "folyományokat" },
    { "key": "következmények", "value": "folyományok" },
    { "key": "következménye", "value": "folyománya" },
    { "key": "következmény", "value": "folyomány" },
    { "key": "kurvára", "value": "kúvára" },
    { "key": "lángész", "value": "agylángész" },
    { "key": "lebegőpont", "value": "levegőpont" },
    { "key": "lentről", "value": "lentrünnen" },
    { "key": "megcsinál", "value": "kikalimpál" },
    { "key": "megcsúszt", "value": "megsiklott" },
    { "key": "megcsúsz", "value": "megsikl" },
    { "key": "meghalt", "value": "meghótt" },
    { "key": "melyik", "value": "mék" },
    { "key": "mikorra", "value": "mikorára" },
    { "key": "mindent", "value": "minden univerzumot" },
    { "key": "minőségileg", "value": "minőségesen" },
    { "key": "minőségi", "value": "minőséges" },
    { "key": "mitévők legyenek", "value": "mi legyenek tévő" },
    { "key": "mitévők legyünk", "value": "mi legyünk tévő" },
    { "key": "mitévő legyek", "value": "mi legyek tévő" },
    { "key": "mitévő legyen", "value": "mi legyen tévő" },
    { "key": "nagyon", "value": "kúvára" },
    { "key": "nem hülyeség", "value": "nem rossz hülyeség" },
    { "key": "nem nagyon", "value": "kúvára nem" },
    { "key": "nem rossz gondolat", "value": "nem rossz hülyeség" },
    { "key": "nem tartja be", "value": "leszarja" },
    { "key": "nem vész el, csak átalakul", "value": "nem vész el, csak elrohad ott, ahol van" },
    { "key": "nyakatekert", "value": "nyakakevert" },
    { "key": "nyilván[\ ]+", "value": "nyívánvalóan " },
    { "key": "nyolc", "value": "nyóc" },
    { "key": "onnan", "value": "onnen" },
    { "key": "ordenáré", "value": "ordibári" },
    { "key": "ördöngősség", "value": "ördongség" },
    { "key": "otthonról", "value": "otthonrünnen" },
    { "key": "régi szép idők", "value": "jó öreg idők" },
    { "key": "relativitás", "value": "relavitás" },
    { "key": "rendetlenkedik", "value": "szarokszik" },
    { "key": "repes", "value": "rebezsg" },
    { "key": "robosztus", "value": "robosztikus" },
    { "key": "robusztus", "value": "robosztikus" },
    { "key": "self-?signed", "value": "szemszájf" },
    { "key": "sima liba", "value": "tiszta liba" },
    { "key": "sima ügy", "value": "tiszta liba" },
    { "key": "szemlátomást", "value": "szemlátomással" },
    { "key": "szolg", "value": "szóg" },
    { "key": "szöszmöszöl", "value": "szötymötyöl" },
    { "key": "tapogat", "value": "taperol" },
    { "key": "távolról", "value": "távolrünnen" },
    { "key": "telepít", "value": "telepet" },
    { "key": "ténylegesen", "value": "kúvára" },
    { "key": "tevékeny", "value": "tevény" },
    { "key": "tiszta ügy", "value": "tiszta liba" },
    { "key": "tisztában va", "value": "tiszta va" },
    { "key": "több,? mint valószínű", "value": "több mint valószínűsítem" },
    { "key": "tudomás", "value": "tudomány" },
    { "key": "tudom", "value": "vágom" },
    { "key": "tudott", "value": "tudatot" },
    { "key": "valóban", "value": "kúvára" },
    { "key": "vágomány", "value": "tudomány" },
    { "key": "viszonylagos", "value": "viszonyban mérhető" },
    { "key": "voln", "value": "vón" },
    { "key": "volt", "value": "vót" },
    { "key": "xss", "value": "kroszkripszkrájt" }
];

karlization(tagTranslation, wordTranslation);