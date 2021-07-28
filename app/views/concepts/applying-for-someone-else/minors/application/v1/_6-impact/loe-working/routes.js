module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-working', function (req, res) {
    // Get the answer from the query string
    var workingStatus = req.session.data['workingStatus']

    if (workingStatus === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-working-why-not')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-stopped-working')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-working/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/loe-working/index', content)
  })
  // END__######################################################################################################
}
