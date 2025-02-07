/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/assets/js/module/smoothScroll.js
function smoothScroll(){
    //スムーススクロール
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
}
;// ./src/assets/js/module/pcbgChange.js
function pcbgChange(){
    //PC背景切り替え制御
    $(window).on('load',function(){
        const pcbgKey01 = $('.js-pcbg-key01').offset().top;
        const pcbgKey02 = $('.js-pcbg-key02').offset().top;

        function pcbg(){
            if($(window).scrollTop() < pcbgKey01 ){
                $('.js-pcbg-item[data-item="1"]').addClass('is-active');
            }else{
                $('.js-pcbg-item[data-item="1"]').removeClass('is-active');
            };

            if($(window).scrollTop() >= pcbgKey01 && $(window).scrollTop() < pcbgKey02 ){
                $('.js-pcbg-item[data-item="2"]').addClass('is-active');
            }else{
                $('.js-pcbg-item[data-item="2"]').removeClass('is-active');
            };

            if($(window).scrollTop() >= pcbgKey02 ){
                $('.js-pcbg-item[data-item="3"]').addClass('is-active');
            }else{
                $('.js-pcbg-item[data-item="3"]').removeClass('is-active');
            };
        }

        pcbg();

        $(window).on('scroll',function(){
            pcbg();
        });
    });
}
;// ./src/assets/js/module/inview.js
function inview(){
    //inview.jsでスクロールアニメーションを付与
    $('.js-fadein').on('inview',function(){
        $(this).addClass('is-inview');
    });
}
;// ./src/assets/js/module/toTop.js
function toTop(){
  //「TOP」ボタン制御
  $(window).on('load', function(){
    const totopBtn = $('.c-totop');
    const contentsHeight = $(document).height();
    const footerHeight = $('.l-footer').height();

    $(window).on('scroll',function(){
      const currentPosition = $(window).innerHeight() + $(window).scrollTop();

      if($(window).scrollTop() > 1 ){
        totopBtn.addClass('is-active');
      }else{
        totopBtn.removeClass('is-active');
      };

      if ( contentsHeight - currentPosition  < footerHeight ){ 
        totopBtn.addClass('absolute');
      } else { 
        totopBtn.removeClass('absolute');
      }
    });
  });
}
;// ./src/assets/js/common.js





smoothScroll();
pcbgChange();
inview();
toTop();
/******/ })()
;