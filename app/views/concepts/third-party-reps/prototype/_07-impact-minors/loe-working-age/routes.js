module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-minors/loe-working-age', function (req, res) {
    // Get the answer from the query string
    var workingAge = req.session.data['workingAge']

    if (workingAge === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-daily-capacity')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-working')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-minors/loe-working-age/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-minors/loe-working-age/index', content)
  })
  // END__######################################################################################################
}
