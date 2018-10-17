module.exports = function (router, content) {
  // START__####################################################################################################
  // File: your-choices
  // Variable: yourChoice

  router.post('/application/your-choices', function (req, res) {
    // Get the answer from the query string
    var yourChoice = req.session.data['yourChoice']

    if (yourChoice === 'Sexual assault or abuse') {
      // Redirect to the relevant page
      res.redirect('/application/declaration')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })
  // END__######################################################################################################
}
