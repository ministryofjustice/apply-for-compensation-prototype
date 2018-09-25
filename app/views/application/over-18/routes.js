module.exports = function (router) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/over-18', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'no') {
      // Redirect to the relevant page
      res.redirect('https://www.cica.gov.uk/oas/Account/Create')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/who-is-making-the-application')
    }
  })


  // Pass the question in to the page
  router.get('/application/over-18/', function (req, res) {
    res.render('application/over-18/index', { 'over18Question': 'Are you 18 or over?' })
  })
  // END__######################################################################################################
}
