module.exports = function (router, content) {
  // START__####################################################################################################
  // File: same-family
  // Variable: sameFamily

  router.post('/application/same-family', function (req, res) {
    // // Get the answer from the query string
    // var sameFamily = req.session.data['sameFamily']
    //
    // if (sameFamily === 'No') {
    //   // Redirect to the relevant page
    //   res.redirect('/application/your-choices')
    // } else {
    //   // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/ongoing-relationship')

  })

  // Pass the question in to the page
  router.get('/application/same-family/', function (req, res) {
    res.render('application/same-family/index', content)
  })

  // Error state
  router.get('/application/same-family/error', function (req, res) {
    res.render('application/same-family/error', content)
  })
  // END__######################################################################################################
  }
