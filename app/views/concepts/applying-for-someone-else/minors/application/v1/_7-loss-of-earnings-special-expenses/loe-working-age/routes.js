module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-age', function (req, res) {
    // Get the answer from the query string
    var workingAge = req.session.data['workingAge']

    if (workingAge === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-education')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-age/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-age/index', content)
  })
  // END__######################################################################################################
}
