var Resume = DS.Model.extend({
  companyName: DS.attr('string'),
  description: DS.attr('string'),
  endDate: DS.attr('date'),
  locationCity: DS.attr('string'),
  locationState: DS.attr('string'),
  startDate: DS.attr('date'),
  title: DS.attr('string'),
});

Resume.reopenClass({
  FIXTURES: [{
    id: 1,
    companyName: 'In-N-Out Burger',
    description: "Performed daily duties which mainly included cooking. Attended to customer's needs and queries to uphold the best possible quality of food and service. Assisted managers with leading shifts.",
    endDate: new Date(2011, 1),
    locationCity: 'Mill Valley',
    locationState: 'CA',
    startDate: new Date(2006, 5),
    title: 'Level 6 Employee (Chef)'
  }, { 
    id: 2,
    companyName: 'Cooperative Institute for Research in Environmental Sciences',
    description: "Coded scripts to create plots to help further explain research and results.Created posters for presentations, and assist with miscellaneous tasks.",
    endDate: new Date(2011, 8),
    locationCity: 'Boulder',
    locationState: 'CO',
    startDate: new Date(2011, 5),
    title: 'Research Assistant'
  }, { 
    id: 3,
    companyName: 'Barry Wehmiller Design Group',
    description: 'Providing industrial process engineering to manufacturing plants and facilities. Programming PLC software such as RSLogix 5000, PLC 3 and 5 software. Designing HMIs in FactoryView and FactoryLink to allow customers/clients to interact with PLCs and hardware. Creating documentation of processes and operations to describe what work we did and how we did it. Interacting with clients and other vendors pn a daily basis to achieve a quality product.',
    endDate: new Date(2013, 7),
    locationCity: 'Fort Collins & Greenwood Village',
    locationState: 'CO',
    startDate: new Date(2012, 6),
    title: 'Electrical Engineer'
  }, { 
    id: 4,
    companyName: 'University of Colorado at Boulder',
    description: 'Assisting Communication students/faculty with day-to-day IT support. Maintenance/creation of Communication DEPT websites, along with creating/updating wikis for department for documenting solutions to IT problems.',
    endDate: new Date(2011, 5),
    locationCity: 'Boulder',
    locationState: 'CO',
    startDate: new Date(2011, 5),
    title: 'Assistant System Admin'
  }, { 
    id: 5,
    companyName: 'Switchfly, Inc.',
    description: 'Developing in Ember.js frontend framework and Spring MVC in Travel Industry SaaS Company.',
    endDate: new Date(),
    locationCity: 'San Francisco',
    locationState: 'CA',
    startDate: new Date(2013, 12),
    title: 'Web Developer'
  }]
});
 
export default Resume;