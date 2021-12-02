module.exports = function (router, content) {
// START__####################################################################################################
// File: Other medical treatment?

router.post('/application/_3-3rd-party-reps/_1-adult/_7-treatment/hospital-visited', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string

    var seekMedicalHelp = req.session.data['seekMedicalHelp']

    if (seekMedicalHelp === 'Yes') {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      res.redirect('/application/_3-3rd-party-reps/_1-adult/_7-treatment/hospital-details')
    } else {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_8-other-comp/context-prev-compensation')
    }

  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})


// END__######################################################################################################
}
