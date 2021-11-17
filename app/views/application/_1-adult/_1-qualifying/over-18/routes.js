module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_1-adult/_1-qualifying/over-18', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // Get the answer from the query string
      var over18 = req.session.data['over18']

      if (over18 === 'No') {
        // Redirect to the relevant page
        res.redirect('/application/_0-start-and-qualifying/transition')
      } else {
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/_1-adult/_10-end/check-your-answers-page')
        }
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/application/_1-adult/_1-qualifying/british-citizen')
      }

      } else if (buttonClicked === 'Save and complete application later') {
        return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_1-qualifying/over-18/', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/over-18/index', content)
  })
  //error page
  router.get('/application/_1-adult/_1-qualifying/over-18/error', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/over-18/error', content)
  })
  //error page
  router.get('/application/_1-adult/_1-qualifying/over-18/transition', function (req, res) {
    res.render('application/_1-adult/_1-qualifying/over-18/transition', content)
  })
  // END__######################################################################################################
}
