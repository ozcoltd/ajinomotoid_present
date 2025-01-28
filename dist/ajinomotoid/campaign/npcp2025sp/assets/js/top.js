/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/assets/js/module/slider01.js
function slider01(){
    //「商品紹介」スライダー制御
    $('.js-top-slider01').slick({
        dots: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
    });
}
;// ./src/assets/js/module/slider02.js
function slider02(){
    //「応募方法」スライダー制御
    $('.js-top-slider02').slick({
        arrows: false,
        dots: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
    });
}
;// ./src/assets/js/top.js



slider01();
slider02();
/******/ })()
;