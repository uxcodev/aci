(function($) {

  $(".sidebar-overlay").on('click', function() {
    $(".main-wrapper").removeClass("sidebar-open on");
  });

  $(".app-content").on('click', function() {
    $(".header-block-logo").removeClass("active");
  });
  
  $('.list2').on('click', function(event){
    event.preventDefault();
    
    $(".main-wrapper").toggleClass("on sidebar-open");
  });

  $('.wrapper-close-x').on('click', function(event){
    event.preventDefault();
    
    $(".main-wrapper").removeClass("on sidebar-open");
  });

  $('#add_btn').on('click', function(event){
    event.preventDefault();
    $(".right_elements").addClass("add_save_template");
  });

  $('.btn_it').on('click', function(event){
    event.preventDefault();
    $(".not-active").addClass("active");
  });

  $('.close_wfixed').on('click', function(event){
    event.preventDefault();
    $(".not-active").removeClass("active");
  });

  $('.template_block').on('click', function(event){
    event.preventDefault();
    $(".wrapper_title_block").addClass("remove_btn_st");
  });

  document.addEventListener("DOMContentLoaded", function(){

    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - $(window).height();;
      if ($(window).scrollTop() > navHeight) {
          $('#header').addClass('on');
      } else {
          $('#header').removeClass('on');
      }
    });

  });

  $( document ).ready( function() {
    let checkedAll = "[name='select-all-1']",
        $checkedAll = $( checkedAll ),
        checkedItems = "[name='check1']",
        $checkedItems = $( checkedItems );

    $( $checkedAll ).on('change', function () {
      var $this = $(this);
      var isChecked = $this.prop('checked');

      if (isChecked) {
        $checkedItems.prop('checked', true);
      } else {
        $checkedItems.prop('checked', false);
      }
    });

    $checkedItems.on('click', function () {
      let inputs = $checkedItems.length;
      let inputs_checked = $(checkedItems + ":checked").length;
      // console.log(inputs_checked);
      
      if( inputs_checked <= 0 ) {
        $checkedAll.prop('checked', false);
        $checkedAll.prop('indeterminate', null);
      }
      else if( inputs == inputs_checked ) {
        $checkedAll.prop('checked', true);
        $checkedAll.prop('indeterminate', false);
      } else {
        $checkedAll.prop('checked', true);
        $checkedAll.prop('indeterminate', true);
      }
    });

  });

  $( document ).ready( function() {
    let checkedAll = "[name='select-all-2']",
        $checkedAll = $( checkedAll ),
        checkedItems = "[name='check2']",
        $checkedItems = $( checkedItems );

    $( $checkedAll ).on('change', function () {
      var $this = $(this);
      var isChecked = $this.prop('checked');

      if (isChecked) {
        $checkedItems.prop('checked', true);
      } else {
        $checkedItems.prop('checked', false);
      }
    });

    $checkedItems.on('click', function () {
      let inputs = $checkedItems.length;
      let inputs_checked = $(checkedItems + ":checked").length;
      // console.log(inputs_checked);
      
      if( inputs_checked <= 0 ) {
        $checkedAll.prop('checked', false);
        $checkedAll.prop('indeterminate', null);
      }
      else if( inputs == inputs_checked ) {
        $checkedAll.prop('checked', true);
        $checkedAll.prop('indeterminate', false);
      } else {
        $checkedAll.prop('checked', true);
        $checkedAll.prop('indeterminate', true);
      }
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    let mySwiper;

    $('.icon_show').on('click', function(event){
      event.preventDefault();
      window.mySwiper.destroy(false, true);
      $(this).addClass('hide');
      $('.icon_hide').removeClass('hide');
      $('.wrapper-swiper').addClass('active');
    });

    $('.icon_hide').on('click', function(event){
      event.preventDefault();
      $(this).addClass('hide');
      $('.icon_show').removeClass('hide');
      $('.wrapper-swiper').removeClass('active');
      window.mySwiper.init($('.swiper'));
      window.mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 28,
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        },
      });
    });

    window.mySwiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 28,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });

  });


})(jQuery);