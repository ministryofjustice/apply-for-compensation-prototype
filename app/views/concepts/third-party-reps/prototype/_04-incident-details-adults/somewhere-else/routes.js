module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/somewhere-else', function (req, res) {

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
      }

    res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/somewhere-else/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
