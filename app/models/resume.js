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
  }]
});
 
export default Resume;