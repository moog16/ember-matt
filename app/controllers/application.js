import utils from 'ember-matt/utils/utils';

export default Ember.Controller.extend({

  init: function() {
    this._super();
    Em.run.next(this, function() {
      utils.resizeBackgroundHeight();
      $(window).resize(utils.resizeBackgroundHeight);
    });
  }
});