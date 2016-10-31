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
})(jQuery);
