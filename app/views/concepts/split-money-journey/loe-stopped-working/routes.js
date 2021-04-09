module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/loe-stopped-working', function (req, res) {
    // Get the answer from the query string
    var stoppedWorking = req.session.data['stoppedWorking']

    if (stoppedWorking === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/end')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/split-money-journey/loe-how-long')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/loe-stopped-working/', function (req, res) {
    res.render('concepts/split-money-journey/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
