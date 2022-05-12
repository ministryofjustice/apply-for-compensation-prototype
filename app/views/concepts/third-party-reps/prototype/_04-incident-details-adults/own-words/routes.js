module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words', function (req, res) {

      // Get the answer from the query string
      var over18 = req.session.data['over18']

      if (over18 === 'No') {
        // Redirect to the relevant page
        res.redirect('/application/_0-start-and-qualifying/transition')
      } else {
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
        }

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'completed'

        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/own-words/transition', content)
  })
  // END__######################################################################################################
}
