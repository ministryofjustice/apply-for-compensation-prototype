module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/_9-end/declaration', function (req, res) {
    // Get the answer from the query string
    var declaration = req.session.data['declaration']
    //setting the session variable for check your answer page to false
    req.session.checking_answers = false
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_9-end/confirmation-page')
    //}
  })

  // Pass the question in to the page
  router.get('/application/_9-end/declaration/', function (req, res) {
    res.render('application/_9-end/declaration/index', content)
  })
  // END__######################################################################################################
}
