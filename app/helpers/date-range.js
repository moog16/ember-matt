// import moment from 'ember-matt/vendor/momentjs/moment';

export default Ember.Handlebars.makeBoundHelper(function(startDate, endDate) {
  var formattedEndDate;
  if(moment(endDate).format() === moment(new Date()).format()) {
    formattedEndDate = 'Present';
  } else {
    formattedEndDate = moment(endDate).format("MMM YYYY");
  }
  return moment(startDate).format("MMM YYYY") +' - '+ 
        formattedEndDate +' ('+
        moment.duration(endDate-startDate).humanize()+')';
});