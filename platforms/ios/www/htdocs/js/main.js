function onDeviceReady(){var n=".";"android"==device.platform.toLowerCase()&&(n="/android_asset/www");var o={c:new Media(n+"/htdocs/sounds/c.mp3"),cs:new Media(n+"/htdocs/sounds/cs.mp3"),d:new Media(n+"/htdocs/sounds/d.mp3"),ds:new Media(n+"/htdocs/sounds/ds.mp3"),e:new Media(n+"/htdocs/sounds/e.mp3")};$(".play").on("click",function(){var n=$(this).data("note");o[n].play()})}console.debug("main.js"),document.addEventListener("deviceready",onDeviceReady,!1);var hiraganaObj={a:{id:1,hiragana:"あ",vowel:null,consonant:"a",symbolArr:[{name:"あり",img:"ant",sound:"ant"},{name:"あんぱんまん",img:"anpanman",sound:"anpanman"}],sound:"a"},i:{id:2,hiragana:"い",vowel:null,consonant:"i",symbolArr:[{name:"いし",img:"stone",sound:"stone"},{name:"いぬ",img:"dog",sound:"dog"}],sound:"i"},u:{id:3,hiragana:"う",vowel:null,consonant:"",symbolArr:[{name:"うま",img:"horse",sound:"horse"},{name:"うめぼし",img:"ume",sound:"ume"}],sound:"u"},e:{id:4,hiragana:"え",vowel:null,consonant:"e",symbolArr:[{name:"えび",img:"shrimp",sound:"shrimp"},{name:"えんぴつ",img:"pencil",sound:"pencil"}],sound:"e"},o:{id:5,hiragana:"お",vowel:null,consonant:"o",symbolArr:[{name:"おんぷ",img:"note",sound:"note"},{name:"おっとせい",img:"furseal",sound:"furseal"}],sound:"a"}};console.log("あああああああああ"),_.each(hiraganaObj,function(n,o){console.log(o,n)});