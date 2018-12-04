module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address
  // this is the first step of getting an address - from here either the user select 'Find UK address' and goes to the view 'find-uk-address'
  // or uses the link in the reveal to enter the address manually and goes to the view 'address-manually'
  // or  uses the link in the reveal to enter an on uk address and goes to the view 'address-non-UK'
  router.post('/application/address', function (req, res) {
    res.redirect('/application/find-uk-address')
  })

  // Pass the question in to the page
  router.get('/application/address/', function (req, res) {
    res.render('application/address/index', content)
  })

  router.post('/application/address', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/phone-number')
  })

  router.get('/application/address/error-invalid-postcode', function (req, res) {
    res.render('application/address/error-invalid-postcode', content)
  })

  router.get('/application/address/error-blank-postcode', function (req, res) {
    res.render('application/address/error-blank-postcode', content)
  })
  // END__######################################################################################################
}
