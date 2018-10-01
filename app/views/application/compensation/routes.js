module.exports = function (router) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/compensation', function (req, res) {
    // Get the answer from the query string
      var otherCompensation = req.session.data['otherCompensation']
      if (otherCompensation === 'no') {
      // Redirect to the relevant page
      res.redirect('/application/compensation-why-not')
      } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/compensation-who')
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
  };

  // Pass the question in to the page
  router.get('/application/compensation/', function (req, res) {
    res.render('application/compensation/index', content)
  })
  // END__######################################################################################################
}
