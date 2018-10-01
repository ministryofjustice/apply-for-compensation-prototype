module.exports = function (router) {
  // START__####################################################################################################
  // File: address-non-UK
  // will produce an address as text on the 'check your answers page'
  router.post('/application/address-non-UK', function (req, res) {
    req.session.data['address-manually'] = null; // this line is here to clear the data if the user had used the option to enter an address manually initially as we don't want to have duplicated data in the end
    req.session.data['address-lookup-result'] = null; // this line is here to clear the data if the user had used the postcode look-up initially as we don't want to have duplicated data in the end
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/phone-number')
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
  };

  // Pass the question in to the page
  router.get('/application/address-non-uk/', function (req, res) {
    res.render('application/address-non-uk/index', content)
  })
  // END__######################################################################################################
}
