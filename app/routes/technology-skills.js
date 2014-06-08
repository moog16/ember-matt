export default Ember.Route.extend({
  model: function() {
    var self = this;
    this.store.find('technology-skills-image').then(function(images) {
      debugger;
    })
  }
});
