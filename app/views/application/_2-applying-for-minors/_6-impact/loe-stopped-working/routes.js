module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-applying-for-minors/_6-impact/loe-stopped-working', function (req, res) {
    // Get the answer from the query string
    var stoppedWorking = req.session.data['stoppedWorking']

    if (stoppedWorking === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/_6-impact/loe-se-future-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_2-applying-for-minors/_6-impact/loe-stopped-working-how-long')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_6-impact/loe-stopped-working/', function (req, res) {
    res.render('application/_2-applying-for-minors/_6-impact/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
