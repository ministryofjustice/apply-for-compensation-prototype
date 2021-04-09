module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/split-money-journey/loe-briefly-describe-circumstances', function (req, res) {
    // Get the answer from the query string
    var describeCircumstances = req.session.data['describeCircumstances']

    if (describeCircumstances === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/split-money-journey/context-special-expenses')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/split-money-journey/loe-circumstances-detail')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/split-money-journey/loe-briefly-describe-circumstances/', function (req, res) {
    res.render('concepts/split-money-journey/loe-briefly-describe-circumstances/index', content)
  })
  // END__######################################################################################################
}
