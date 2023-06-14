module.exports = function (router, content) {
// START__####################################################################################################
// File: Other medical treatment?

router.post('/concepts/physical-injuries/one-q-page-v4/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var seekMedicalHelp = req.session.data['seekMedicalHelp']

  if (seekMedicalHelp === 'Yes') {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money/')
  }
})


// END__######################################################################################################
}
