console.log("[app.js]"),require.config({baseUrl:"htdocs/js/",paths:{jquery:"lib/jquery-1.12.4",underscore:"lib/underscore",backbone:"lib/backbone",main:"common/main",flexslider:"lib/jquery/flexslider"},shim:{jquery:{exports:"$"},underscore:{exports:"_"},backbone:{deps:["jquery","underscore"],exports:"Backbone"},flexslider:{deps:["jquery"],exports:"flexslider"},main:{deps:["jquery"],exports:"Main"}},urlArgs:"bust="+(new Date).getTime()}),require(["backbone","routers/router"],function(e,r){console.log("[require]"),new r,e.history.start()});