export default Ember.ObjectController.extend({
  resume: null,

  init: function() {
    this._super();
    var self = this;
    this.get('store').find('resume').then(function(resume) {
      self.set('resume', resume);
    });
  }
});