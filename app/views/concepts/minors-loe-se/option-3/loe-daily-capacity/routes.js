module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/loe-daily-capacity', function (req, res) {
    // Get the answer from the query string
    var dailyCapacity = req.session.data['dailyCapacity']

    if (dailyCapacity === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors-loe-se/option-3/loe-se-future-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors-loe-se/option-3/loe-affected-six-months')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/loe-daily-capacity/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/loe-daily-capacity/index', content)
  })
  // END__######################################################################################################
}
