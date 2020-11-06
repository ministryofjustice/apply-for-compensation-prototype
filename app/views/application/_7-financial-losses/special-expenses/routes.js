module.exports = function (router, content) {
  // START__####################################################################################################
  // File: special-expenses
  // Variable: sexualAssault

  router.post('/application/_7-financial-losses/special-expenses', function (req, res) {
    // Get the answer from the query string
    var specialExpenses = req.session.data['specialExpenses']

    if (specialExpenses === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/_7-financial-losses/end')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_8-other-comp/context-prev-compensation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_7-financial-losses/special-expenses/', function (req, res) {
    res.render('application/_7-financial-losses/special-expenses/index', content)
  })
  // Error state
  router.get('/application/_7-financial-losses/special-expenses/error', function (req, res) {
    res.render('application/_7-financial-losses/special-expenses/error', content)
  })
  // Transition state
  router.get('/application/_7-financial-losses/special-expenses/transition', function (req, res) {
    res.render('application/_7-financial-losses/special-expenses/transition', content)
  })
  // END__######################################################################################################
}
