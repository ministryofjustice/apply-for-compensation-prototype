const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {

  // the functions below will help get the date we need to cover the over 2 years delay for applying and the over 48h delay for reporting
  function getDatefrom3inputs(inputDay, inputMonth, inputYear) {
      // using the 3 variables above to create a date object with moment
      var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
      var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
      var day = Number.parseInt(inputDay, 10);
      var date = moment([year, month, day]); //create a date from the 3 elements we received from the user
      return date
  }

  // START__####################################################################################################
  // File: incident-date
  // Variables: incident-date-day, incident-date-month, incident-date-year

  router.post('/application/incident-date', function (req, res) {
    // first I'm getting the data, this will be used to check if the date is 01/01/2017 which is the trigger to mock linked cases / previous applications
    var incidentDateDay = req.session.data['incident-date-day']
    var incidentDateMonth = req.session.data['incident-date-month']
    var incidentDateYear = req.session.data['incident-date-year']
    var  incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
    // get today's date   and compare it to the date of incident
    var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
    var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
    var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
      var reportingDateDay = req.session.data['incidentReported-day']
      var reportingDateMonth = req.session.data['incidentReported-month']
      var reportingDateYear = req.session.data['incidentReported-year']
      var reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
      incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h
      if ( isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
        return res.redirect('/application/reporting-delay')
      }
    }
    req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page

    if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) { // mocking linked cases by checking against a set trigger date = 01/01/2017
      // Redirect to the relevant page
      res.redirect('/application/previous-applications')
    } else {
          if (delayInYears > 2){ //apply more than 2 years after the incident
            return res.redirect('/application/application-delay')
          }
          req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
          // else we're under 2 years
          if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
            return res.redirect('/application/check-your-answers-page')
          }
          res.redirect('/application/incident-location')
    }
  })

  // Pass the question in to the page
  router.get('/application/incident-date/', function (req, res) {
    res.render('application/incident-date/index', content)
  })
  // END__######################################################################################################
}
