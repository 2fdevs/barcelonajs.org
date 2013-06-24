"use strict";!function(){function a(){setTimeout(function(){window.scrollTo(0,1)},0)}try{Typekit.load({active:function(){},inactive:function(){}})}catch(b){}window.addEventListener("load",function(){window.pageYOffset||a()}),window.addEventListener("orientationchange",a)}();var MarkdownModule=angular.module("angular-markdown",[]);MarkdownModule.directive("markdown",function(){var a=new Showdown.converter;return{restrict:"E",require:"?ngModel",link:function(b,c,d,e){var f=d.extensions,g=!1;if(f){var h=[];f.split(",").forEach(function(a){h.push(a.replace(/^\s+|\s+$/g,""))}),h.indexOf("prettify")>=0&&(g=!0),a=new Showdown.converter({extensions:h})}var i=d.strip;i="true"==String(i).toLowerCase()?!0:!1;var j=function(){var b="",f="";d.ngModel?e.$modelValue&&(f=e.$modelValue):f=c.text(),i&&(f=f.replace(/^[ /t]+/g,"").replace(/\n[ /t]+/g,"\n")),b=a.makeHtml(f),c.html(b),g&&prettyPrint()};d.ngModel&&b.$watch(d.ngModel,j),j()}}}),angular.module("bcnjs",["angular-markdown"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);var bcnjs_events=[{date:[2013,0,3]},{date:[2013,1,7]},{date:[2013,2,7]},{date:[2013,3,4]},{date:[2013,4,2]},{date:[2013,5,6],talks:[{title:"Introduction to GruntJS",presenter:{username:"drpicox",displayname:"Dr. David Rodenas"},description:"**Optimize a web page with a single command.** Grunt is the *Makefile* for JS projects. In this talk I present what is Grunt, which is its philosophy, and a small example how to use it. And the best of it, how to build and optimize everything with a simple command.",resources:{github:"http://drpicox.github.io/gruntjs-presentation-introduction/#/grunt",slides:"https://github.com/drpicox/gruntjs-presentation-introduction"}},{title:"Try a little tenderness",presenter:{username:"masylum",displayname:"Pau Ramon"},description:"**Stop writing ugly Javascript, you don't have to.** This talk is about enforcing good practices for building and maintaining big Javascript applications. I'm going to share what we learned while building Teambox (more than 200k lines of javascript code)",resources:{github:"",slides:""}},{title:"GPU Deep Dive",presenter:{username:"xbeumala",displayname:"Xavi Beumala"},description:"**with a dose of browser internals understanding** Let's talk about rendering performance, how to boost pages speed and make 60+ FPS animations possible. Clunky and janky scrolls? Jumpy animatios? Unresponsive UIs? Let’s see how to identify, diagnose and fix reflows, composites, repaints, textures and automatic layer creation even for low end devices without die trying.",resources:{github:"",slides:""}}]},{date:[2013,6,4],talks:[{title:"Offline storage and PouchDB",presenter:{username:"toniher",displayname:"Toni Hermoso Pulido"},description:"**There is life after connection** First part of the talk summarizes some current offlline storage options for web developers. Second part introduces and provides some examples of PouchDB, a convenient Javascript library for both offline (local) and online (remote) storage based on CouchDB API.",resources:{github:"",slides:""}},{title:"Motion Detection In Video Through JavaScript",presenter:{username:"demoive",displayname:"Paulo Ávila"},description:"**Making use of HTML5 video, Webcam API and Canvas**. This interactive talk explores the possibilities of motion and even movement detection of a live video stream within the browser. Find out about accessing pixel-by-pixel information from individual video frames, different RGB (and alpha) channels, and contribute ideas for potential applications and improvements.",resources:{github:"",slides:""}}]},{date:[2013,7,1]},{date:[2013,8,5]},{date:[2013,9,3]},{date:[2013,10,7]},{date:[2013,11,5]}];angular.module("bcnjs").controller("MainCtrl",["$scope",function(a){for(var b=0,c=new Date;new Date(bcnjs_events[b].date[0],bcnjs_events[b].date[1],bcnjs_events[b].date[2])<=new Date(c.getFullYear(),c.getMonth(),c.getDate());)b++;for(bcnjs_events[b].date=new Date(bcnjs_events[b].date[0],bcnjs_events[b].date[1],bcnjs_events[b].date[2]),a.bcnjs=bcnjs_events[b];a.bcnjs.talks.length<3;){var d={title:"Free slot",description:"**This slot could be yours! Submit your talk now.**  You did some crazy stuff with JavaScript? You want to show it to the community?\nDrop us a line on your topic on [Twitter](https://twitter.com/bcnjs) or to [Google+](https://plus.google.com/u/0/communities/115705669406517039298)."};a.bcnjs.talks.push(d)}}]);