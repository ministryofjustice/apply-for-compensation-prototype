module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/index', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/error', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/transition', content)
  })
  // END__######################################################################################################
}
