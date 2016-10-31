/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery, TimelineMax */

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
})(jQuery);
