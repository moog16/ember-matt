// deprecated
export default Ember.Route.extend({
  model: function() {
    return this.store.find('technology-skills-image');
  }
});
