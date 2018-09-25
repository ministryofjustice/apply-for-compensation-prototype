module.exports = function (router) {
  // START__####################################################################################################
  // File: after-1979
  // Variable: after1979

  router.post('/application/after-1979', function (req, res) {
    // Get the answer from the query string
    var after1979 = req.session.data['after1979']

    if (after1979 === 'no') {
      // Redirect to the relevant page
      res.redirect('/application/same-family')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/you-have-a-choice')
    }
  })

  // Pass the question in to the page
  router.get('/application/after-1979/', function (req, res) {
    res.render('application/after-1979/index', { 'after1979Question': 'Did the crime happen on or after 1st October 1979?' })
  })
  // END__######################################################################################################
}
