// $('.carousel .carousel-item').each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
  
//     for (var i = 0; i < 4; i++) {
//       next = next.next();
//       if (!next.length) {
//         next = $(this).siblings(':first');
//       }
  
//       next.children(':first-child').clone().appendTo($(this));
//     }
//   });

$('.my-carousel .my-carousel-item').each(function () {
  if(screen.width>768){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i = 0; i < 4; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
  
      next.children(':first-child').clone().appendTo($(this));
    }
  }
  });

  $('.my-carousel-2 .my-carousel-item-2').each(function () {
    if(screen.width>768){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    
      for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
      }
    }
    });