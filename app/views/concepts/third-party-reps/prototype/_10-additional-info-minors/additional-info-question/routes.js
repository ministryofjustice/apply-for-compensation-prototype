module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: otherDetailsQ

  router.post('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question', function (req, res) {
    // Get the answer from the query string
    var applicationAdditionalInfoQ = req.session.data['applicationAdditionalInfoQ']

    if (applicationAdditionalInfoQ === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-details')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-additional-info-minors/additional-info-question/transition', content)
  })
  // END__######################################################################################################
}
