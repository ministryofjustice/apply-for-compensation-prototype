module.exports = function (router) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/compensation', function (req, res) {
    // Get the answer from the query string
      var otherCompensation = req.session.data['otherCompensation']
      if (otherCompensation === 'no') {
      // Redirect to the relevant page
      res.redirect('/application/compensation-why-not')
      } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/compensation-who')
      }
  })
  // END__######################################################################################################
}