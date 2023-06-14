module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/they', function (req, res) {

    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/over18')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/they/under18')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/phone-number/they/index', content)
  })

  // END__######################################################################################################
}
