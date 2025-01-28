export function inview(){
    //inview.jsでスクロールアニメーションを付与
    $('.js-fadein').on('inview',function(){
        $(this).addClass('is-inview');
    });
}