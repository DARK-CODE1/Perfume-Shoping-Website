 $(function () {
    'use strict';

    // canvas menu activasion

    $('.canvas-open').on('click', function () {
        $('.off-canvas-menu-wrapper,.off-canvas-overlay').addClass('active');
    });

    $('.canvas-open').on('click', function () {
        $('.off-canvas-menu-wrapper,.off-canvas-overlay').removeClass('active');
    });
 });