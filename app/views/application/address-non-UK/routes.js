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
  // END__######################################################################################################
}
