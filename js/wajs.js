/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery */

/*
 * Animation samples using the web animations API
 */

(function($) {
  'use strict';

  /* Hello world animation */
  var elem = document.querySelector('.pulse-wajs');
  elem.animate({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)']
  }, {
    direction: 'alternate',
    duration: 2000,
    iterations: Infinity
  });
  /* EO: Hello world animation */

  /* Emphasis animation */
  document.querySelector('.emphasis-wajs').animate([
    {transform: 'scale(1)', opacity: 1, offset: 0},
    {transform: 'scale(.5)', opacity: .5, offset: .3},
    {transform: 'scale(.667)', opacity: .667, offset: .7875},
    {transform: 'scale(.6)', opacity: .6, offset: 1}
  ], {
    duration: 700, // milliseconds
    easing: 'ease-in-out', // 'linear', a bezier curve, etc.
    delay: 10, // milliseconds
    iterations: Infinity,
    direction: 'alternate', // 'normal', 'reverse', etc.
    fill: 'forwards' // 'backwards', 'both', 'none', 'auto'
  });
  /* EO: Emphasis animation */

  /* Rain animation */
  const $container = $('.rain-wajs');
  const drops = [{
    delay: 200,
    duration: 1600,
    x: 30,
    y: 3,
    width: 22,
    height: 24
  }, {
    delay: 800,
    duration: 1200,
    x: 0,
    y: 22,
    width: 30,
    height: 30
  }, {
    delay: 900,
    duration: 1400,
    x: 88,
    y: 18,
    width: 43,
    height: 44
  }, {
    delay: 1500,
    duration: 1200,
    x: 68,
    y: 16,
    width: 33,
    height: 33
  }, {
    delay: 2200,
    duration: 1700,
    x: 21,
    y: 10,
    width: 60,
    height: 60
  }];

  drops.forEach(drop => {
    let $el = $('<div class="wajs-drop"></div>');
    $el.css({
      'position': 'absolute',
      'left': drop.x,
      'top': drop.y,
      'width': drop.width + 'px',
      'height': drop.height + 'px',
      'background-color': 'rgba(87, 139, 255, 0.55)',
      'border-radius': '50%'
    });
    $container.prepend($el);

    let player = $el.get(0).animate([
      {transform: 'scale(0.01)', opacity: 1},
      {transform: 'scale(1)', opacity: 1}
    ], {
      duration: drop.duration,
      easing: 'cubic-bezier(.8,.1,1,.04)',
      delay: drop.delay,
      fill: 'forwards'
    });

    player.onfinish = () => {
      $el.css('background-color', 'rgba(87, 139, 255, 1)');
    };
  });
  /* EO: Rain animation */
})(jQuery);
