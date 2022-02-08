$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// NavBar Toggle Button
$(".btn").click(function(){
    $(".navibar").toggle();
    $(".btn").find("i").toggleClass("fa-arrow-alt-circle-up");
});



function myFunction(x) {
    if (x.matches) {
        $(".navbar-listitem a").click(function(){
            $(".navibar").toggle();
        });
    } 
  }
  
  const mmObj = window.matchMedia("(max-width: 768px)")
  
  myFunction(mmObj);
  
  mmObj.addListener(myFunction);



//Scroll Button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });

