module.exports = function (router) {
  // START__####################################################################################################
  // File: after-1979
  // Variable: after1979

  router.post('/application/after-1979', function (req, res) {
    // Get the answer from the query string
    var after1979 = req.session.data['after1979']

    if (after1979 === 'no') {
      // Redirect to the relevant page
      res.redirect('/application/same-family')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/you-have-a-choice')
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
  };

  // Pass the question in to the page
  router.get('/application/after-1979/', function (req, res) {
    res.render('application/after-1979/index', content)
  })
  // END__######################################################################################################
}
