$(document).ready(function(){
  $('body').vegas({
    shuffle: true,
    delay: 10000,
    transitionDuration: 300,
    overlay: "/overlays/01.png",
    slides: [
      { src: '/img/1.jpg' },
      { src: '/img/2.jpg' },
      { src: '/img/3.jpg' },
      { src: '/img/4.jpg' }
    ]
  });

  $("#tell_more").click(function(){
    $("#panel").toggleClass('black-glass', 300, "easeOutSine");
    $("#more").slideToggle();
    $("#even_more").slideUp();
    return false;
  });

  $("#tell_even_more").click(function(){
    $("#even_more").slideToggle();
    return false;
  });
});
