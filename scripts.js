// var boxintro = document.getElementById("boxintro");
// var box1 = document.getElementById("box1");
// var box2 = document.getElementById("box2");
// var box3 = document.getElementById("box3");
// var box4 = document.getElementById("box4");
// var box5 = document.getElementById("box5");
// var box = document.getElementById("box");
// var intro = new TimelineLite();

// var $portrait = document.querySelector(".header__portrait");
// var $portraitImg = document.querySelector(".header__img");
// var $banner = document.querySelector(".header__banner");
// var $introBox = document.querySelector(".intro__box");
// var $introTitle = document.querySelector(".intro__title");
// var $introTCalltoaction = document.querySelector(".intro__calltoaction");
// var $introDescription = document.querySelector(".intro__description");
// var portraitOffsetTop = $portrait.getBoundingClientRect().top + window.scrollY;
// var portraitOffsetLeft = $portrait.getBoundingClientRect().left + window.scrollY;

// intro
//   .to(box1, 0, {opacity:"1", delay:0.8})
//   .to(box1, 0.5, {scaleX:1 , ease: Expo.easeOut}, "firstshot")
//   .to(box4, 0, {opacity:"1"}, "firstshot")
//   .to(box4, 0.5, {scaleY:1, ease: Expo.easeOut}, "firstshot")
//   .to(box2, 0, {opacity:"1"}, "secondshot-=0.15")
//   .to(box2, 0.5, {scaleY:1, ease: Expo.easeOut}, "secondshot-=0.15")
//   .to(box3, 0, {opacity:"1"}, "secondshot-=0.15")
//   .to(box3, 0.5, {scaleX:1 , ease: Expo.easeOut}, "secondshot-=0.15")
//   .to(box5, 0, {opacity:"1"}, "-=0.15")
//   .to(box5, 0.5, {scaleY:1 , ease: Expo.easeOut},"-=0.15")
//   .to(box, 0.5, {top:portraitOffsetTop, left: portraitOffsetLeft , ease: Expo.easeOut})
//   .to($introBox, 0, {opacity:1})
//   .to(box, 0, {opacity:0}, "portraitBlend")
//   .to($portrait, 0, {opacity:1}, "portraitBlend")
//   .to($portraitImg, 0.8, {top:0, ease: Expo.easeOut}, "pickaboo")
//   .to($banner, 0.8, {top:0, ease: Expo.easeOut}, "pickaboo")
//   .from($introTitle, 0.8, {opacity:0, top:10, ease: Expo.easeOut}, "pickaboo")
//   .from($introDescription, 0.8, {opacity:0, top:10, ease: Expo.easeOut}, "pickaboo+=0.2")
//   .from($introTCalltoaction, 1, {opacity:0, top:10, ease: Expo.easeOut}, "pickaboo+=0.4")

// var wallpaper = new TimelineLite();
// wallpaper

var classname = document.getElementsByClassName("js-portfolio");

var myFunction = function() {
  var box = document.getElementsByTagName("body");
  box.className = "gotoportfolio";
};

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener("click", myFunction, false);
}
