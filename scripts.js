var boxintro = document.getElementById("boxintro");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var intro = new TimelineLite();

intro
  //.to(boxintro, 0.4, {opacity:"1", delay:0.2})
  //.to(boxintro, 0.4, {scale:0.1666})
  //.to(boxintro, 0.4, {top:"0", left:"0"})
  .to(box1, 0, {opacity:"1", delay:0.8})
  .to(box1, 0.5, {scaleX:1 , ease: Expo.easeOut}, "firstshot")
  .to(box4, 0, {opacity:"1"}, "firstshot")
  .to(box4, 0.5, {scaleY:1, ease: Expo.easeOut}, "firstshot")
  .to(box2, 0, {opacity:"1"}, "secondshot-=0.15")
  .to(box2, 0.5, {scaleY:1, ease: Expo.easeOut}, "secondshot-=0.15")
  .to(box3, 0, {opacity:"1"}, "secondshot-=0.15")
  .to(box3, 0.5, {scaleX:1 , ease: Expo.easeOut}, "secondshot-=0.15")

