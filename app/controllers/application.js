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

      var setNewHeight = function(top, d) {
        d = d || 0;
        var newBTop = top + d;
        console.log(newBTop);
        $background.css('top', newBTop);
      };
      if(bTop >= 0 && delta > 0) {
        setNewHeight(0);
        return;
      }
      else if(Math.abs(windowHeight) < Math.abs(bTop)) {
        if(delta > 0) {
          setNewHeight(bTop, delta);
        }
        return;
      }

      setNewHeight(bTop, delta);
    });
  }
});