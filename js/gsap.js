/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery, TweenMax, TimelineMax */

/*
 * Animation samples using Greensock's TweenMax library
 */
(function($) {
  'use strict';

  /* Hello world animation */
  var pulseEl = document.querySelector('.pulse-gsap');
  var pulseTl = new TimelineMax({
    delay: 0.01,
    repeat: -1,
    yoyo: true
  });
  pulseTl.to(pulseEl, 2, {
    opacity: 0.5,
    scale: 0.5,
    ease: 'Linear'
  })
  .to(pulseEl, 2, {
    opacity: 1,
    scale: 1,
    ease: 'Linear'
  });
  /* EO: Hello world animation */

  /* Emphasis animation */
  var emphasisEl = document.querySelector('.emphasis-gsap');
  var emphasisTl = new TimelineMax({
    delay: 0.1,
    repeat: -1,
    yoyo: true
  });

  emphasisTl.to(emphasisEl, 0.350, {
    opacity: 0.5,
    scale: 0.5,
    ease: 'Power2.easeInOut'
  })
  .to(emphasisEl, 0.300, {
    opacity: 0.667,
    scale: 0.667,
    ease: 'Power2.easeInOut'
  })
  .to(emphasisEl, 0.300, {
    opacity: 0.6,
    scale: 0.6,
    ease: 'Power2.easeInOut'
  })
  .to(emphasisEl, 0.350, {
    opacity: 1,
    scale: 1,
    ease: 'Power2.easeInOut'
  });
  /* EO: Emphasis animation */

  /* Rain animation */
  const $container = $('.rain-gsap');
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

    let tween = new TweenMax.fromTo($el, drop.duration / 800, {
      scale: 0.01,
      opacity: 1
    }, {
      delay: drop.delay / 800,
      scale: 1,
      opacity: 1,
      ease: 'Power4.easeIn',
      onComplete() {
        $el.css('background-color', 'rgba(87, 139, 255, 1)');
      }
    });
  });
  /* EO: Rain animation */
})(jQuery);
