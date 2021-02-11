module.exports = function (router, content) {
// START__####################################################################################################
// File: Other medical treatment?

router.post('/application/_6-treatment/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var seekMedicalHelp = req.session.data['seekMedicalHelp']

  if (seekMedicalHelp === 'Yes') {
    res.redirect('/application/_6-treatment/hospital-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_7-financial-losses/context-your-money/')
  }
})


// END__######################################################################################################
}
