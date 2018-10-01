module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  //
  router.post('/application/reporting-delay', function (req, res) {
    //if the applicant might also have delayed applying  so we need to check
    var incidentDateDay = req.session.data['incident-date-day']
    var incidentDateMonth = req.session.data['incident-date-month']
    var incidentDateYear = req.session.data['incident-date-year']
    var  incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
    // get today's date   and compare it to the date of incident
    var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
    var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
    var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library
    //check if they delayed applying
    if (delayInYears > 2){ //apply more than 2 years after the incident
      return res.redirect('/application/application-delay')
    }
    req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
    // else we're under 2 years
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
   res.redirect('/application/incident-location')
  })
  
  // Pass the question in to the page
  router.get('/application/reporting-delay/', function (req, res) {
    res.render('application/reporting-delay/index', content)
  })
  // END__######################################################################################################
}
