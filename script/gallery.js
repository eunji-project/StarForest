 $(function(){
 var swiper = new Swiper('.gallery_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        
        320: {
          slidesPerView: 1,  //브라우저가 768보다 클 때
          spaceBetween: 10,
        },

        601: {
          centeredSlides: true,
          slidesPerView: 2,  //브라우저가 1024보다 클 때
          spaceBetween: 30,
        },

        901: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 60,
        },
      },

    });
});