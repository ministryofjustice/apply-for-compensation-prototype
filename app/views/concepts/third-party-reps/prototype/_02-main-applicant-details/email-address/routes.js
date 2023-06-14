module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address', function (req, res) {

    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/you/over18')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/you/under18')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/email-address/index', content)
  })
  // END__######################################################################################################
}
