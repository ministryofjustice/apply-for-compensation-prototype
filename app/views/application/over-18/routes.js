module.exports = function (router) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/over-18', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'no') {
      // Redirect to the relevant page
      res.redirect('https://www.cica.gov.uk/oas/Account/Create')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/who-is-making-the-application')
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
    over18Question: 'Are you 18 or over?'
  };
  // Pass the question in to the page
  router.get('/application/over-18/', function (req, res) {
    res.render('application/over-18/index', content)
  })
  // END__######################################################################################################
}
