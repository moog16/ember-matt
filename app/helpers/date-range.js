export default Ember.Handlebars.makeBoundHelper(function(startDate, endDate) {
  return moment(startDate).format("MMM YYYY") +' - '+ 
        moment(endDate).format("MMM YYYY") +' ('+
        moment.duration(endDate-startDate).humanize()+')';
});