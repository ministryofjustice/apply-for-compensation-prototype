module.exports = function (router) {
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
    // Period of abuse start and end
    periodOfAbuseStartQuestion: 'When did it start?',
    periodOfAbuseEndQuestion: 'When did it stop?',
    periodOfAbuseHint: 'For example, 03 2018. You can enter an approximate date',
    // Phone number
    phoneNumberQuestion: "Enter your telephone number",
    phoneNumberHint: "We'll use this to contact you about your application for example, to request more information",
    // Previous applications
    previousApplicationsQuestion: 'Have you applied for compensation from us for this crime before?',
    // Reporting delay
    reportingDelayQuestion: "Why was the crime not reported sooner?",
  };
  // Pass the question in to the page
  router.get('/application/reporting-delay/', function (req, res) {
    res.render('application/reporting-delay/index', content)
  })
  // END__######################################################################################################
}
