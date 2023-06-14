module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var seekMedicalHelp = req.session.data['seekMedicalHelp']

  if (seekMedicalHelp === 'Yes') {
    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/hospital-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation')
  }
})


// END__######################################################################################################
}
