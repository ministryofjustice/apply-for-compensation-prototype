const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router) {
  // START__####################################################################################################
  // File: period-of-abuse-end
  //
  router.post('/application/period-of-abuse-end', function (req, res) {
    var POAEndMonth = req.session.data['period-of-abuse-end-month']
    var POAEndYear = req.session.data['period-of-abuse-end-year']
    // now I'm using the 2 variables above to create a date object with moment to check if they delayed applying over 2 years
    var year = Number.parseInt(POAEndYear, 10); // making sure with have a well formated number for year and month
    var month = Number.parseInt(POAEndMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract
    var currentDate = moment().endOf('month'); // this line of code make sure that the date is using the last day of the current month
    var deadlineDate = moment(currentDate).subtract(2, 'year'); // this is two years ago, the end date will be compared to that deadline
    var dateOfEndOfPOA = moment([year, month]).endOf('month'); //create a date that is the end of the period of abuse from the 2 elements we received from the user (+making it the last day of that month)

    if (dateOfEndOfPOA < deadlineDate){ //apply more than 2 years after the end of the period of abuse
      return res.redirect('/application/application-delay')
    }
    req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
    // else we're under 2 years

    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
    var reportingDateDay = req.session.data['incidentReported-day']
    var reportingDateMonth = req.session.data['incidentReported-month']
    var reportingDateYear = req.session.data['incidentReported-year']
    var reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    var POAEndMonth = req.session.data['period-of-abuse-end-month']
    var POAEndYear = req.session.data['period-of-abuse-end-year']
    var endofPeriodOfAbuseDate = getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h
    if ( isReportedOver48h(endofPeriodOfAbuseDate, reportingDate)){ // changing the end of period of abuse date is now triggering the reporting delay screen
      return res.redirect('/application/reporting-delay')
    }
  }
  req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
  // else we're under 2 days

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/incident-location')
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
    // Incident location
    incidentLocationHeading: "Where did the crime happen?",
    incidentLocationOther: "Tell us where the crime happened",
    // Incident reported
    incidentReportedQuestion: 'Was the crime reported to the police?',
    // Name
    nameQuestion: 'Enter your name',
    nameErrorNoTitle: "Enter your title",
    nameErrorNoFirstName: "Enter your first name",
    nameErrorNoLastName: "Enter your last name",
    // Name have other
    otherNameQuestion: 'Have you ever been known by any other names?',
    // Name other
    nameOtherQuestion: "What other names have you used?",
    otherNameError: "Select yes if you have been known by any other names",
    // Offender name
    offenderNameQuestion: 'Enter their name',
    // Ongoing relationship
    ongoingRelationshipQuestion: "Do you have any contact with this person?",
    // Over 18
    over18Question: 'Are you 18 or over?',
    // Period of abuse end
    periodOfAbuseQuestion: 'When did it stop?',
    periodOfAbuseHint: 'For example, 03 2018. You can enter an approximate date',
  };
  // Pass the question in to the page
  router.get('/application/period-of-abuse-end/', function (req, res) {
    res.render('application/period-of-abuse-end/index', content)
  })
  // END__######################################################################################################
}
