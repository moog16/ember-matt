var TechnologySkillsImage = DS.Model.extend({
  imageUrlName: DS.attr('string'),
  imageTitle: DS.attr('string'),
  group: DS.attr('number'),
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
                isLong: true,
                group: 1
              }, {
                id: 1,
                imageUrlName: 'apache_logo.png',
                imageTitle: 'apache',
                group: 1
              }, {
                id: 2,
                imageUrlName: 'backbone_logo.png',
                imageTitle: 'backbone.js',
                group: 1,
                isLong: true
              }, {
                id: 3,
                imageUrlName: 'C_logo.png',
                imageTitle: 'C',
                group: 2
              }, {
                id: 4,
                imageUrlName: 'C++_logo.png',
                imageTitle: 'C++',
                group: 2
              }, {
                id: 5,
                imageUrlName: 'expressjs_logo.png',
                imageTitle: 'express.js',
                group: 2,
                isLong: true
              }, {
                id: 6,
                imageUrlName: 'grunt_logo.png',
                imageTitle: 'grunt',
                group: 3
              }, {
                id: 7,
                imageUrlName: 'jasmine_logo.png',
                imageTitle: 'jasmine',
                group: 3,
                isLong: true
              }, {
                id: 8,
                imageUrlName: 'javascript_logo.png',
                imageTitle: 'javascript',
                group: 3
              }, {
                id: 9,
                imageUrlName: 'jquery_logo.png',
                imageTitle: 'jquery',
                group: 4,
                isLong: true
              }, {
                id: 10,
                imageUrlName: 'mongodb_logo.png',
                imageTitle: 'mongodb',
                group: 4,
                isLong: true
              }, {
                id: 11,
                imageUrlName: 'mysql_logo.png',
                imageTitle: 'mysql',
                group: 4
              }, {
                id: 12,
                imageUrlName: 'nodejs_logo.png',
                imageTitle: 'node.js',
                group: 5,
                isLong: true
              }, {
                id: 13,
                imageUrlName: 'phonegap_logo.png',
                imageTitle: 'phonegap',
                group: 5,
                isLong: true
              }, {
                id: 14,
                imageUrlName: 'php_logo.png',
                imageTitle: 'php',
                group: 5
              }, {
                id: 15,
                imageUrlName: 'ruby_logo.png',
                imageTitle: 'ruby',
                group: 6
              }, {
                id: 16,
                imageUrlName: 'stylus_logo.png',
                imageTitle: 'stylus',
                group: 6
              }]
});

export default TechnologySkillsImage;