import utils from 'ember-matt/utils/utils';

export default Ember.Controller.extend({

  init: function() {
    this._super();
    Em.run.next(this, function() {
      utils.resizeBackgroundHeight();
      $(window).resize(utils.resizeBackgroundHeight);
    });

    $(window).bind('mousewheel DOMMouseScroll', function(e) {
      var $background = $('.background-splash.fold'),
          bTop = parseInt($background.css('top')),
          delta = e.originalEvent.wheelDeltaY,
          windowHeight = $(window).height();

      if(bTop >= 0 && delta > 0) {
        // don't allow background to go further than the top
        utils.setNewHeight(0, 0, $background);
      } else if(Math.abs(windowHeight) < Math.abs(bTop)) {
        if(delta > 0) {
          utils.setNewHeight(bTop, delta, $background);
        }
        // if the bkgrnd is already off page, stop moving it
        return;
      } else {
        // move it if in range
        utils.setNewHeight(bTop, delta, $background);
      }
    });
  }
});