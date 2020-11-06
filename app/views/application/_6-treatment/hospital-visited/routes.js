module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_6-treatment/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var visitedHospital = req.session.data['visitedHospital']

  if (visitedHospital === 'No') {

      res.redirect('/application/_7-financial-losses/context-your-money/')

  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_6-treatment/hospital-details')
  }
})


// END__######################################################################################################
}
