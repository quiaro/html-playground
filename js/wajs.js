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
})(jQuery);
