function onDeviceReady(){console.log(Media);var e=".";"android"==device.platform.toLowerCase()&&(e="/android_asset/www");var o={c:new Media(e+"/htdocs/sounds/c.mp3"),cs:new Media(e+"/htdocs/sounds/cs.mp3"),d:new Media(e+"/htdocs/sounds/d.mp3"),ds:new Media(e+"/htdocs/sounds/ds.mp3"),e:new Media(e+"/htdocs/sounds/e.mp3")};$(".play").on("click",function(){console.log("click detected");var e=$(this).data("note");console.log(e,o.note),o[e].play()})}console.log("main.js"),$("#btn-test").on("click",function(){alert("きゃ///")}),document.addEventListener("deviceready",onDeviceReady,!1);