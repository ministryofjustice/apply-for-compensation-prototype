const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../../../helpers/date');
module.exports = function (router, content) {

  // START__####################################################################################################
  // File: crime-reported-date
  // Variables: incident-date-day, incident-date-month, incident-date-year, incidentReported-day, incidentReported-month, incidentReported-year

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date', function (req, res) {

      // first I'm getting the data, this will be used to check if the date is 01/01/2017 which is the trigger to mock linked cases / previous applications
      var incidentDateDay = req.session.data['incident-date-day']
      var incidentDateMonth = req.session.data['incident-date-month']
      var incidentDateYear = req.session.data['incident-date-year']
      var incidentDate = dateHelper.getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
      // get date reported and compare it to the date of incident
      var reportedDateDay = req.session.data['incidentReported-day']
      var reportedDateMonth = req.session.data['incidentReported-month']
      var reportedDateYear = req.session.data['incidentReported-year']
      var reportedDate = dateHelper.getDatefrom3inputs(reportedDateDay, reportedDateMonth, reportedDateYear) //that's the date reported based on the 3 elements we received from the user

      var duration = moment.duration(incidentDate.diff(reportedDate)); // / calculate the difference between the two (that's in milliseconds or something)
      var delayInDays = duration.asDays(); // take that number in days  - we can do that thanks to the Moment library

      console.log(incidentDate);
      console.log(reportedDate);
      console.log(delayInDays);


      if (delayInDays < (-365*2)){ //apply more than 2 years after the incident
        return res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/reporting-delay')
      }
      req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
      // else we're under 2 years
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
      }
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/police-force')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-blank', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-blank', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-past', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-past', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-format', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-format', content)
  })

  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-incomplete', function (req, res) {
      res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reported-date/error-incomplete', content)
    })
  // END__######################################################################################################
}
