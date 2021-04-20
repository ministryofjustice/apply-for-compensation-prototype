module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/loe-working-age', function (req, res) {
    // Get the answer from the query string
    var workingAge = req.session.data['workingAge']

    if (workingAge === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors-loe-se/loe-education')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors-loe-se/loe-working')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/loe-working-age/', function (req, res) {
    res.render('concepts/minors-loe-se/loe-working-age/index', content)
  })
  // END__######################################################################################################
}
