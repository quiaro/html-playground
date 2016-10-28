/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery */

(function($) {
  'use strict';

  var elem = document.querySelector('.pulse-wajs');
  elem.animate({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)']
  }, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity
  });
})(jQuery);
