module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-minors/loe-daily-capacity', function (req, res) {
    // Get the answer from the query string
    var dailyCapacity = req.session.data['dailyCapacity']

    if (dailyCapacity === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-se-future-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-affected-six-months')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-minors/loe-daily-capacity/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-minors/loe-daily-capacity/index', content)
  })
  // END__######################################################################################################
}
