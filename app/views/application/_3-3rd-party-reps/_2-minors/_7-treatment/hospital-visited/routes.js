module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_3-3rd-party-reps/_2-minors/_7-treatment/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var seekMedicalHelp = req.session.data['seekMedicalHelp']

  if (seekMedicalHelp === 'Yes') {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/hospital-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/context-prev-compensation')
  }
})


// END__######################################################################################################
}
