(function($){

  var factory = {
    init: function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header: function(){
      //메인메뉴에 마우스 올리면(enter)
      //서브메뉴와 서브메뉴배경이 부드럽게 보인다.
      $('.main-btn').on({
        mouseenter: function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);

          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        },focsuIn : function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);

          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        }
      });
   
      $('.container').on({
        mouseleave: function(){
          $('.sub-bg').stop().slideUp(300);
          $('.sub').stop().slideUp(300);
          $('.main-btn').removeClass('on');
        }
      })
    },
    section1: function(){
      console.log('section1')
    },
    section2: function(){
      console.log('section2')
    },
    footer: function(){
      console.log('footer')
    },
  }
  factory.init();
})(jQuery);