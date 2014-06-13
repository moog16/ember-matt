var TechnologySkillsImage = DS.Model.extend({
  imageUrlName: DS.attr('string'),
  imageTitle: DS.attr('string'),
  isLong: DS.attr('bool'),
  
  imageUrl: function() {
    return './assets/images/logos/'+this.get('imageUrlName');
  }.property()
});

TechnologySkillsImage.reopenClass({
    FIXTURES: [{
              id: 0,
              imageUrlName: 'angularjs_logo.png',
              imageTitle: 'angular.js',
              isLong: true
            }, {
              id: 1,
              imageUrlName: 'apache_logo.png',
              imageTitle: 'apache'
            }, {
              id: 2,
              imageUrlName: 'backbone_logo.png',
              imageTitle: 'backbone.js',
              isLong: true
            }, {
              id: 3,
              imageUrlName: 'C_logo.png',
              imageTitle: 'C'
            }, {
              id: 4,
              imageUrlName: 'C++_logo.png',
              imageTitle: 'C++'
            }, {
              id: 5,
              imageUrlName: 'expressjs_logo.png',
              imageTitle: 'express.js',
              isLong: true
            }, {
              id: 6,
              imageUrlName: 'grunt_logo.png',
              imageTitle: 'grunt'
            }, {
              id: 7,
              imageUrlName: 'jasmine_logo.png',
              imageTitle: 'jasmine',
              isLong: true
            }, {
              id: 8,
              imageUrlName: 'javascript_logo.png',
              imageTitle: 'javascript'
            }, {
              id: 9,
              imageUrlName: 'jquery_logo.png',
              imageTitle: 'jquery',
              isLong: true
            }, {
              id: 10,
              imageUrlName: 'mongodb_logo.png',
              imageTitle: 'mongodb',
              isLong: true
            }, {
              id: 11,
              imageUrlName: 'mysql_logo.png',
              imageTitle: 'mysql'
            }, {
              id: 12,
              imageUrlName: 'nodejs_logo.png',
              imageTitle: 'node.js',
              isLong: true
            }, {
              id: 13,
              imageUrlName: 'phonegap_logo.png',
              imageTitle: 'phonegap',
              isLong: true
            }, {
              id: 14,
              imageUrlName: 'php_logo.png',
              imageTitle: 'php'
            }, {
              id: 15,
              imageUrlName: 'ruby_logo.png',
              imageTitle: 'ruby'
            }, {
              id: 16,
              imageUrlName: 'stylus_logo.png',
              imageTitle: 'stylus'
            }]
});

export default TechnologySkillsImage;