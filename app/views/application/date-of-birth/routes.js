const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router) {
  // START__####################################################################################################
  // File: date-of-birth
  //
  router.post('/application/date-of-birth', function (req, res) {
    // getting the inputs to be able to calculate if the user is a minor or not on the day of application
    var year = Number.parseInt(req.session.data['dob-year'], 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(req.session.data['dob-month'] - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(req.session.data['dob-day'], 10);

    var currentDate = moment(); //create a date that is 'just now ' so today
    var dateOfBirth = moment([year, month, day]); //create a date that is the DOB from the 3 elements we received on the date of birth page from the user)

    var duration = moment.duration(currentDate.diff(dateOfBirth));// calculate the difference between the two
    var ageInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

    if(ageInYears < 18) { // it's a minor
      return res.redirect('https://www.cica.gov.uk/oas/Account/Create')
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/email-address')
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

  };

  // Pass the question in to the page
  router.get('/application/date-of-birth/', function (req, res) {
    res.render('application/date-of-birth/index', content)
  })

  router.get('/application/date-of-birth/error-past', function (req, res) {
    res.render('application/date-of-birth/error-past', content)
  })

  router.get('/application/date-of-birth/error-blank', function (req, res) {
    res.render('application/date-of-birth/error-blank', content)
  })

  router.get('/application/date-of-birth/error-before-incident', function (req, res) {
    res.render('application/date-of-birth/error-before-incident', content)
  })
// END__######################################################################################################
}
