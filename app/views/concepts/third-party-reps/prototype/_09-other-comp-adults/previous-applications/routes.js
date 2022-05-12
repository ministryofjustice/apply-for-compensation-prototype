module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications', function (req, res) {





      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
      }
      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications/index', content)
  })

  // Pass the error content in to the page
  router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications/error', content)
  })
  // END__######################################################################################################
}
