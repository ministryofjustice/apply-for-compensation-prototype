module.exports = function (router) {
  // START__####################################################################################################
  // File: do-you-know-offender
  // Variable: know-offender

  router.post('/application/do-you-know-offender', function (req, res) {
    // Get the answer from the query string
    var knowOffender = req.session.data['know-offender']

    if (knowOffender === 'no')  {
      // Redirect to the relevant page
      res.redirect('/application/name')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/offender-name')
    }
  })
  // END__######################################################################################################
}
