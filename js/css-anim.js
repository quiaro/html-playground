/* eslint-env browser */
/* eslint max-len: ["error", 120, { "ignoreComments": true }] */

/* global jQuery */

(function($) {
  'use strict';

  function updateElem() {
    $(this).addClass('finished');
  }

  /* Rain drop animation */
  $('.rain-css > .rain-drop').on('animationend', updateElem);
  /* EO: Rain drop animation */
})(jQuery);
