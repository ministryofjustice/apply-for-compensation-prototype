module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/address', function (req, res) {

    var repConfirmationPreference = req.session.data['repConfirmationPreference']

    if (repConfirmationPreference === 'Email') {
        res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/phone-number')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/email-address')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/address/index', content)
  })

  // END__######################################################################################################
}
