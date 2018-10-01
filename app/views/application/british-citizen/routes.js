module.exports = function (router) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'no') {
    // Redirect to the relevant page
    res.redirect('https://www.cica.gov.uk/oas/Account/Create')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/over-18')
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
  britishCitizenQuestion: 'Are you a British citizen?'
};

// Pass the question in to the page
router.get('/application/british-citizen/', function (req, res) {
  res.render('application/british-citizen/index', content)
})

// END__######################################################################################################
}
