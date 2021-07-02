module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/loe-stopped-working', function (req, res) {
    // Get the answer from the query string
    var stoppedWorking = req.session.data['stoppedWorking']

    if (stoppedWorking === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors-loe-se/option-3/loe-se-future-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors-loe-se/option-3/loe-stopped-working-how-long')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/loe-stopped-working/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
