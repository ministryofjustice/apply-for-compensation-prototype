module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-daily-capacity', function (req, res) {
    // Get the answer from the query string
    var dailyCapacity = req.session.data['dailyCapacity']

    if (dailyCapacity === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-se-future-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-affected-six-months')
    }
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_6-impact/loe-daily-capacity/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_6-impact/loe-daily-capacity/index', content)
  })
  // END__######################################################################################################
}
