module.exports = function (router) {
  // START__####################################################################################################
  // File: criminal-convictions
  // Variable: criminalConvictions

  router.post('/application/criminal-convictions', function (req, res) {
    // Get the answer from the query string
    var criminalConvictions = req.session.data['criminalConvictions']

    if (criminalConvictions === 'yes') {
      // Redirect to the relevant page
      res.redirect('/application/tell-criminal-convictions')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/bridge')
    }
  })

  // Pass the question in to the page
  router.get('/application/criminal-convictions/', function (req, res) {
    res.render('application/criminal-convictions/index', { 'criminalConvictionsQuestion': 'Have you ever been convicted of a crime?' })
  })
  // END__######################################################################################################
}
