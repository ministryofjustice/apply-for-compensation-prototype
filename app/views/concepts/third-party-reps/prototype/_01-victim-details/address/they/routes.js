module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/address/they', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']
    var over18 = req.session.data['over18']
    var capableOwnAffairs = req.session.data['capableOwnAffairs'];

    if (over18 === 'No') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/under18')
    } else if (capableOwnAffairs === 'No') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/over18')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/phone-number/they')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/address/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/address/they/index', content)
  })

  // END__######################################################################################################
}
