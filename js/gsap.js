/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery, TweenMax */

/*
 * Animation samples using Greensock's TweenMax library
 */
(function($) {
  'use strict';

  var elem = document.querySelector('.pulse-gsap');
  TweenMax.fromTo(elem, 2, {
    opacity: 0.5,
    scale: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'Linear'
  }, {
    opacity: 1,
    scale: 1,
    repeat: -1,
    yoyo: true,
    ease: 'Linear'
  });
})(jQuery);
