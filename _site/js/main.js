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
      { src: '/img/4.jpg' },
      { src: '/img/5.jpg' },
      { src: '/img/6.jpg' },
      { src: '/img/7.jpg' },
      { src: '/img/8.jpg' },
      { src: '/img/9.jpg' },
      { src: '/img/10.jpg' },
      { src: '/img/10.jpg' },
      { src: '/img/11.jpg' },
      { src: '/img/12.jpg' },
      { src: '/img/13.jpg' }
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
