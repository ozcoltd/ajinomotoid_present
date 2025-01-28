export function pcbgChange(){
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