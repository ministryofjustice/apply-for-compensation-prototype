module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/minor', function (req, res) {

    var repType = req.session.data['rep-type']

    if (repType === 'Parent') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-you')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/minor/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/minor/index', content)
  })
  // END__######################################################################################################
}
