module.exports = function (router, content) {
// START__####################################################################################################
// File: Other medical treatment?

router.post('/application/_7-treatment/hospital-visited', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if (buttonClicked === 'Continue') {

    // Get the answer from the query string

    var seekMedicalHelp = req.session.data['seekMedicalHelp']

    if (seekMedicalHelp === 'Yes') {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      res.redirect('/application/_7-treatment/hospital-details')
    } else {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_8-other-comp/context-prev-compensation')
    }

  } else if (buttonClicked === 'Save and finish later') {
    return res.redirect('/application/_0-start-screens/save-confirmation')
  }
})


// END__######################################################################################################
}
