// $(document).ready(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 500) {
//             $(".scroll-fade").css({"opacity" : "0"})
//         }
//         else {
//             $(".scroll-fade").css({"opacity" : "1"})
//         }
//     })
// })

// var documentEl = $(document),
//     fadeElem = $('.scroll-fade');

// documentEl.on('scroll', function(){
//     var currScrollPos = document.scrollTop();

//     fadeElem.each(function() {
//         var $this = $(this),
//             elemOffsetTop = $this.offset().top;
//         if(currScrollPos > elemOffsetTop) $this.css('opacity', 1-(currScrollPos-elemOffsetTop)/400);
//     })
// })

AOS.init({
    duration:1200,
})