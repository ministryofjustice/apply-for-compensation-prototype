module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-minors/_6-impact/loe-affected-six-months', function (req, res) {
    // Get the answer from the query string
    var affectedSixMonths = req.session.data['affectedSixMonths']

    if (affectedSixMonths === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-minors/_6-impact/loe-affected-six-months-future')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-minors/_6-impact/loe-se-future-capacity')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_6-impact/loe-affected-six-months/', function (req, res) {
    res.render('application/_2-minors/_6-impact/loe-affected-six-months/index', content)
  })
  // END__######################################################################################################
}
