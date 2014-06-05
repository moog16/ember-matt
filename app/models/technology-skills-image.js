var TechnologySkillsImage = DS.Model.extend({
  imageUrlName: DS.attr('string'),
  
  imageUrl: function() {
    return './assets/images/logos/'+imageUrlName;
  }.property()
});

TechnologySkillsImage.reopenClass({
    FIXTURES: [{
              id: 0,
              imageUrlName: 'angularjs_logo.png'
            }, {
              id: 1,
              imageUrlName: 'apache_logo.png'
            }, {
              id: 2,
              imageUrlName: 'backbone_logo.png'
            }, {
              id: 3,
              imageUrlName: 'C_logo.png'
            }, {
              id: 4,
              imageUrlName: 'C++_logo.png'
            }, {
              id: 5,
              imageUrlName: 'expressjs_logo.png'
            }, {
              id: 6,
              imageUrlName: 'grunt_logo.png'
            }, {
              id: 7,
              imageUrlName: 'jasmine_logo.png'
            }, {
              id: 8,
              imageUrlName: 'javascript_logo.png'
            }, {
              id: 9,
              imageUrlName: 'jquery_logo.png'
            }, {
              id: 10,
              imageUrlName: 'mongodb_logo.png'
            }, {
              id: 11,
              imageUrlName: 'mysql_logo.png'
            }, {
              id: 12,
              imageUrlName: 'nodejs_logo.png'
            }, {
              id: 13,
              imageUrlName: 'phonegap_logo.png'
            }, {
              id: 14,
              imageUrlName: 'php_logo.png'
            }, {
              id: 15,
              imageUrlName: 'ruby_logo.png'
            }, {
              id: 16,
              imageUrlName: 'stylus_logo.png' 
            }]
});

export default TechnologySkillsImage;