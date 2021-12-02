module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18-you
  // Variable: over18

  router.post('/application/_0-start-and-qualifying/over-18-you', function (req, res) {

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
        res.redirect('/application/_0-start-and-qualifying/british-citizen-you')
      }
  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/over-18-you/', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-you/index', content)
  })
  //error page
  router.get('/application/_0-start-and-qualifying/over-18-you/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-you/error', content)
  })
  //error page
  router.get('/application/_0-start-and-qualifying/over-18-you/transition', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-you/transition', content)
  })
  // END__######################################################################################################
}
