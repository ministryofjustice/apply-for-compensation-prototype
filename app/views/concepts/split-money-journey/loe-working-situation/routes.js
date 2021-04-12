module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/loe-working-situation', function (req, res) {
    // Get the answer from the query string
    var applicantOccupation = req.session.data['applicantOccupation']

    if (applicantOccupation === 'unemployed') {
      // Redirect to the relevant page
      res.redirect('/concepts/split-money-journey/context-special-expenses')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/split-money-journey/loe-stopped-working')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/loe-working-situation/', function (req, res) {
    res.render('concepts/split-money-journey/loe-working-situation/index', content)
  })
  // END__######################################################################################################
}
