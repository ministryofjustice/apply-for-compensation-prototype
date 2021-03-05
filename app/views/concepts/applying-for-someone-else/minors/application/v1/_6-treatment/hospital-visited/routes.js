module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var seekMedicalHelp = req.session.data['seekMedicalHelp']

  if (seekMedicalHelp === 'Yes') {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/end/')
  }
})


// END__######################################################################################################
}
