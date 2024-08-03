$(function () {
  'use strict';

  // canvas menu activasion

  $(".canvas_open").on("click", function () {
    $(".offcanvas_menu_wrapper,.offcanvas_overlay").addClass("active");
  });

  $(".canvas_close,.offcanvas_overlay").on("click", function () {
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

  $(".search_box > a").on("click", function () {
    $(this).toggleClass('active');
    $('.search_widget').slideToggle("medium");
  });

  // Mini Cart SlideToggle
  $(".mini_cart_wrapper > a").on("click", function () {
    if ($(window).width() < 991) {
      $('.mini_cart').slideToggle("medium");
    }

  });
});