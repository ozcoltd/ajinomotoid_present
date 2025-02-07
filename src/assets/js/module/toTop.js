export function toTop(){
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