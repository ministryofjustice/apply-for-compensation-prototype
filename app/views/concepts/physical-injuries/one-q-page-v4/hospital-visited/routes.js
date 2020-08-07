module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var visitedHospital = req.session.data['visitedHospital']
  var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
  var haveDMI = req.session.data['dmiDoYouHave']
  let injuredParts = req.session.data['injuredParts']

  if (visitedHospital === 'No') {

    if ((havePhysicalInjuries === 'No') && (haveDMI === 'Yes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details/')
    }

  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-details')
  }
})


// END__######################################################################################################
}
