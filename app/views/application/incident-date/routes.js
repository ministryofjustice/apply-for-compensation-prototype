const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router) {

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

  // Add content key/value pairs here
  // Content variables are isted in the same order as folders when sorted a-z
  // If a variable has been defined in a previous file it is not defined again
  // Comments sepperate the list
  // This list should be moved in to it's own file in the future
  const content = {
    // Postcode lookup
    addressQuestion:'Enter your address',
    postcodeLabel:'Postcode',
    // Manual address entry
    addressQuestion:'Enter your address',
    addressLine1Label: 'Building and street <span class="govuk-visually-hidden">line 1 of 2</span>',
    addressLine2Label: '<span class="govuk-visually-hidden">Building and street line 2 of 2</span>',
    townOrCityLabel: 'Town or city',
    countyLabel: 'County (optional)',
    postcodeOptionalLabel: 'Postcode (optional)',
    // Non uk address
    addressQuestion:'Enter your address',
    // After 1979
    after1979Question: 'Did the crime happen on or after 1st October 1979?',
    // Application delay
    whyDelayQuestion: 'Why did you not apply to us for compensation sooner?',
    // British citizen
    britishCitizenQuestion: 'Are you a British citizen?',
    // Compensation
    otherCompensationQuestion: 'Have you applied for any other compensation for this crime?',
    otherCompensationHint: 'Other compensation can include, for example, insurance, civil damages and court compensation.',
    // Compensation amount
    howMuchCompensationQuestion: 'How much compensation did you get?',
    howMuchCompensationHint: 'You can also tell us if you are still waiting to find out.',
    // Who have you applied to for compensation
    whoCompensationQuestion: 'Who else have you applied to for compensation?',
    // Compensation why not
    compensationWhyNotQuestion: "Why did you not apply for compensation from another source?",
    // Crime reference number
    crimeReferenceNumberQuestion: 'What\'s the crime reference number?',
    crimeReferenceNumberHint: 'For example, 31 3 2018. You can enter an approximate date',
    // Crime reporting date
    crimeReportedDateQuestion: 'When was the crime reported to police?',
    crimeReportedDateHint: 'For example, 31 3 2018. You can enter an approximate date',
    // Criminal convictions
    criminalConvictionsQuestion: 'Have you ever been convicted of a crime?',
    criminalConvictionsHint: 'You do not need to declare convictions that are spent',
    // Date of birth
    dateOfBirthQuestion: "Enter your date of birth",
    errorPastMessage: "Your date of birth must be in the past",
    errorIncompleteMessage: "Enter your date of birth and include a day, month and year",
    errorBeforeIncident: "Your date of birth must be before the crime happened",
    // Declaration
    declarationHeading: 'Declaration',
    declarationBody: 'By continuing you confirm that the information you will give is true as far as you know.',
    warningText: "You could be prosecuted or get less compensation if you give false or misleading information.",
    declarationQuestion: 'Do you agree?',
    // Do you know offender
    doYouKnowOfdfenderQuestion: "Do you know the name of the person who attacked you?",
    // Email address
    emailAddressQuestion: "Enter your email address",
    emailAddressHint: "We'll use this to contact you about your application for example, to request more information and tell you about our decision",
    emailAddressErrorSubHeader: "Enter your email address?",
    emailAddressError: "Enter your email address, for example john.smith@email.com",
    // Find uk addresse
    selectAddressLable: 'Select an address',
    // Incident date
    incidentDateHeading: "When did the crime happen?",
    incidentDateHint: 'For example, 31 3 2018. You can enter an approximate date ',
  };

  // Pass the question in to the page
  router.get('/application/incident-date/', function (req, res) {
    res.render('application/incident-date/index', content)
  })
  // END__######################################################################################################
}
