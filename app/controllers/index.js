export default Ember.ObjectController.extend({
  resume: null,
  techSkills: null,
  numberOfGroups: null,

  init: function() {
    this._super();
    var self = this;

    this.get('store').find('resume').then(function(resume) {
      self.set('resume', resume);
    });

    this.get('store').find('technology-skills-image').then(function(images) {
      self.set('techSkills', images);
      var groups = images.getEach('group');
      groups = groups.uniq();
      self.set('numberOfGroups', groups);
    });
  }
});