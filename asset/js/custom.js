$(function () {

    /**
 * 메뉴바 동작
 *
 * @version 1.0.0
 * @since 2022-08-15
 * @author jy
 */
  menuMotion  = gsap.timeline({
    paused:true,
  })
  menuMotion.addLabel('motion')
  // .to('.dimmed',{visibility: 'visible', opacity: 1},'motion')
  .to('[data-motion="header"]',{ opacity:0,scale:0, stagger: { amount: 0.5, from: "end" }, },'motion')
  .to('.search-wrap',{display: 'block',opacity: 1},'motion')
  .to('.header .gnb-area',{'z-index':12},'motion-=1')
  
  
  

  gsap.to('svg', 2, {
    scale: 4,
    //무한반복
    repeat: -1,
    //부드럽게 움직이게
    ease: 'none'
  })

  /**
   * 상단메뉴 고정
   *
   * @version 1.0.0
   * @since 2022-07-24
   * @author jy
   */
  $(window).scroll(function () {
    const curr = $(window).scrollTop();
    // const top=$(window).scroll();
    if (curr > 44) {
      $('.inner1').addClass('fixed')
      $('.common-inner2').addClass('fixed')
    } else {
      $('.inner1').removeClass('fixed')
      $('.common-inner2').removeClass('fixed')
    }

  })
  /**
   * 카트 메뉴
   *
   * @version 1.0.0
   * @since 2022-07-24
   * @author jy
   */

  $(document).mouseup(function (e) {
    var cartwrap = $(".header .cart-area");
    if (cartwrap.has(e.target).length === 0) {
      // cartwrap.removeClass("active");
      $('.cart-wrap').removeClass('active')
    }
  });

  $('.header .btn-menu.cart').click(function (e) {
    e.preventDefault();

    if ($('.header .cart-wrap').hasClass('active')) {
      $('.header .cart-wrap').removeClass('active')
    } else {
      $('.header .cart-wrap').addClass('active')
    }
  })

      /**
 * 푸터메뉴바 동작
 *
 * @version 1.0.0
 * @since 2022-08-15
 * @author jy
 */
  $('.footer .btn-menu-mb').click(function (e) {
    e.preventDefault();
    // $(this).next('ul').slideToggle();
    $(this).next('ul').toggleClass('active');
    $(this).toggleClass('active');

    
  })

      /**
 * 서치버튼 동작
 *
 * @version 1.0.0
 * @since 2022-08-15
 * @author jy
 */
  $('.link-menu.search').click(function(e){
    e.preventDefault();
    $('.dimmed').addClass('active')
    menuMotion.play()
    $('body').addClass('hidden')
  })
  //사라지는 부분
  $('.btn-close').click(function(e){
    e.preventDefault();
    $('.dimmed').removeClass('active')
    menuMotion.reverse()
    $('body').removeClass('hidden')
  })

  //dimmed클릭시 플레이 되었으면 리버스
  $('.dimmed').click(function (e) {
    e.preventDefault();
    $('.dimmed').removeClass('active')
      $('body').removeClass('hidden')
      menuMotion.reverse()
    //강제로 바꾸는것
  //gsap.set('.search-wrap',{display:none})
    
    })

    /**
 * 모바일 개요버튼
 *
 * @version 1.0.0
 * @since 2022-08-15
 * @author jy
 */
     $('.header .inner1 .btn-desc-mb').click(function (e) {
      e.preventDefault();
      $('.header .inner1 .sub-wrap-mb').slideToggle();
      $('.header .inner1').toggleClass('active');
      $('.dimmed').toggleClass('active');
      $('body').toggleClass('hidden');    
        
      })
  
    //dimmed
    $('.dimmed').click(function (e) {
      e.preventDefault();
  
      if($('.header .inner1').hasClass('active')){
        $('.dimmed').removeClass('active');
      $('body').removeClass('hidden');
      $('.header .inner1 .sub-wrap-mb').slideToggle();
      $('.header .inner1').removeClass('active')
      }
  
    })
  
  
  
        /**
   * 모바일 카트 동작
   *
   * @version 1.0.0
   * @since 2022-08-15
   * @author jy
   */
    $('.btn-cart-mb').click(function (e) {
      e.preventDefault();
      $('.header .menu-area-mb .cart-wrap-mb').slideToggle();
      if ($('.cart-wrap-mb').hasClass('active')) {
        $('.cart-wrap-mb').removeClass('active')
        $('.dimmed').removeClass('active');
        $('body').removeClass('hidden')
        
      } else {
        $('.cart-wrap-mb').addClass('active')
        $('.dimmed').addClass('active');
        $('body').addClass('hidden')
        $('.gnb-area').css('z-index','12');
      }
  
      
  
    })
    $('.dimmed').click(function (e) {
      e.preventDefault();

      if($('.cart-wrap-mb').hasClass('active')){
        $('.cart-wrap-mb').removeClass('active')
        $('.cart-wrap-mb').css('display','none')
        $('.dimmed').removeClass('active');
      }

    })
  
        /**
   * 모바일 상단메뉴 동작
   *
   * @version 1.0.0
   * @since 2022-08-15
   * @author jy
   */
  
    $('.header .btn-menu-mb').click(function (e) {
      e.preventDefault();
      $('.header .menu-area-mb .menu-wrap-mb').slideToggle();
      if ($('.header .menu-wrap-mb').hasClass('active')) {
        $('.header .menu-wrap-mb').removeClass('active')
        $('body').removeClass('hidden')
      } else {
        $('.header .menu-wrap-mb').addClass('active')
        $('body').addClass('hidden')
      }
    })
  
  
  
    // 같은 모션을 각자 다른곳에 주기
    $('.scrollY').each(function (index, element) {
  
      
      fromVal = $(this).data('from')
      toVal = $(this).data('to')
      
  
      gsap.fromTo(element, {
        y: fromVal,
      }, {
        scrollTrigger: {
          trigger: element,
          start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
          end: "100% 80%",
          // markers:true,
          scrub: 1,
        },
        y: toVal,
      })
    })





  allday = gsap.timeline({
    scrollTrigger: {
      trigger: '.allday',
      start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
      end: "130% 80%",
      scrub: 1,
    }
  })



  allday.fromTo('.allday .img-box', {
    y: 100,
  }, {
    y: -10,
  })





  music = gsap.timeline({
    scrollTrigger: {
      trigger: '.music',
      start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
      end: "100% 80%",
      // markers:true,
      scrub: 1,
    }
  })



  music.fromTo('.music .img-box', {
    y: 5,
  }, {
    y: -100,
  })




  display = gsap.timeline({
    scrollTrigger: {
      trigger: '.display',
      start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
      end: "100% 80%",
      // markers:true,
      scrub: 1,
    }
  })



  display.fromTo('.display .img-box', {
    y: 5,
  }, {
    y: -50,
  })




  size = gsap.timeline({
    scrollTrigger: {
      trigger: '.size',
      start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
      end: "100% 80%",
      // markers:true,
      scrub: 1,
    }
  })



  size.fromTo('.size .img-box', {
    y: 30,
  }, {
    y: -50,
  })






  ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function () {




    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function () {

      //개요 나타나는 버튼
      


    },
    // small
    "(max-width: 767px)": function () {
         
      gsap.fromTo('.size .img-box', {
        y: -50,
        
      }, {
        scrollTrigger: {
          trigger: '.size',
          start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
          end: "100% 80%",
          // markers:true,
          scrub: 1,
        },
        y: 0,
      });


      gsap.fromTo('.sc-about .hearthealth .hh-mb', {
        y: 5,
        
      }, {
        scrollTrigger: {
          trigger: '.hearthealth',
          start: "0% 80%", //트리거기준 0%위치, 윈도우기준0%
          end: "100% 80%",
          scrub: 1,
        },
        y: 100,
      });
    

      
    },
    // all
    "all": function () {

    }
  });



});