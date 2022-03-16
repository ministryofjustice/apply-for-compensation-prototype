module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-share-responsibility/you
  //

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you', function (req, res) {

    var sharedResponsibility = req.session.data['sharedResponsibility']

    // if user says they share responsibility, ask who with
    if (sharedResponsibility === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/you')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility/you/error', content)
  })
  // END__######################################################################################################
}
