var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
  this.route('technology-skills');
  this.route('resume');
});

export default Router;
