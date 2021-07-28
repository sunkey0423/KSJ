$(function(){
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows:true,  
        dots: true,
        infinite : true,
        pauseOnHover : true
      });
    //   $(".regular").slick({
    //     arrows:true,  
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite : true,
    //     pauseOnHover : true,
    //   });
      $(".vertical-center").slick({ //notice 부분
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2000, 
        pauseOnHover : true,
      });
      $(".regular").slick({ //newitem부분
        arrows:true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2400, 
        pauseOnHover : true,

      });
       //slick

  $('.close').click(function(){
      $('#pop_up').slideUp(); 
          /* show/hide, slideDown/slideUp, fadeIn/fadeOut*/      
  })

  var lang = 0; /* 닫힘0, 열림1*/
  $('.lang').click(function(){
      /* 다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
     $('.top button.login').removeClass('on');
     $('.top div.login_box').hide();
     login = 0;
     $('.top button.search').removeClass('on');
     $('.top div.search_box').hide();
     search = 0;

     if (lang == 0){
      $('.lang_box').fadeIn();
      $(this).addClass('on');
      lang = 1;
     } else {
          $('.lang_box').fadeOut();
          $(this).removeClass('on');
          lang = 0
     }
  }) //lang

 
}) //제이쿼리 전체 끝