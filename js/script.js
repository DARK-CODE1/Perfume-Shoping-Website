$(function () {
  'use strict';

  // canvas menu activasion

  $(".canvas_open").on("click", () => {
    $(".offcanvas_menu_wrapper,.offcanvas_overlay").addClass("active");
  });

  $(".canvas_close,.offcanvas_overlay").on("click", () => {
    $(".offcanvas_menu_wrapper,.offcanvas_overlay").removeClass("active");
  });

  //  offcanvas menu
  let $offcanvasNav = $('.offcanvas_main_menu'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
  $offcanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
    );

  $offcanvasNavSubMenu.slideUp();

  $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    let $this = $(this);
    if (
      $this
      .parent()
      .attr('class')
      .match(/\b(menu-item-has-children| has-children | has-sub-menu)\b/) &&
      ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
    ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length) {
        $this.siblings('ul').slideUp('slow');
      } else {
        $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
        $this.siblings('ul').slideDown('slow');
      }
    }

    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("class").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  // Search Box SlideToggle

  $(".search_box > a").on("click", () => {
    $(this).toggleClass('active');
    $('.search_widget').slideToggle("medium");
  });

  // Mini Cart SlideToggle
  $(".mini_cart_wrapper > a").on("click", () => {
    if ($(window).width() < 991) {
      $('.mini_cart').slideToggle("medium");
    }

  });

  // Sticky Header

  $(window).on('scroll', () => {
    let scroll = $(window).scrollTop();
    if (scroll < 500) {
      $('.sticky-header').removeClass('sticky');
    } else {
      $('.sticky-header').addClass('sticky');
    }
  })


  // Slider
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      let bgImgUrl = $(this).data('bgimg');
      $(this).css({
        'background-image': 'url(' + bgImgUrl + ')',
      });
    });
  }

  $(window).on('load', function () {
    dataBackgroundImage();
  });

  $('.slider_area').owlCarousel({
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
  });

  // Product Section Slider

  $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item')
      .removeClass('last')
      .eq(event.item.index + event.page.size - 1)
      .addClass('last');
  }).owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    }
  });


  // Tooltip Activation
  $('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a').tooltip({
    animated: 'fade',
    placement: 'top',
    container: 'body',
  });

  // Hot Deals Activation
  $('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item')
      .removeClass('last')
      .eq(event.item.index + event.page.size - 1)
      .addClass('last');
  }).owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 1,
      },
    }
  });


  // Countdwon Activation
  $('[data-countdown').each(function () {
    let $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">Hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'
        )
      );
    });
  });




  // sidebar product Slider
  $('.sidebar_product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item')
      .removeClass('last')
      .eq(event.item.index + event.page.size - 1)
      .addClass('last');
  }).owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 1,
      },
    }
  });


  // Testimonial Slider
  $('.testimonial_sidebar_carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 12000,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
  });


  // New product Slider
  $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item')
      .removeClass('last')
      .eq(event.item.index + event.page.size - 1)
      .addClass('last');
  }).owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
    }
  });


  // Blog Slider
  $('.blog_column3').owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    }
  });

  // Footer Slider
  $('.small_product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target)
      .find('.owl-item')
      .removeClass('last')
      .eq(event.item.index + event.page.size - 1)
      .addClass('last');
  }).owlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    items: 4,
    dots: false,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
        margin: 15,
      },
      768: {
        items: 1,
      },
    }
  });
});