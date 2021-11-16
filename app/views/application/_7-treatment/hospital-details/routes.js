module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Other medical treatment address
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/_7-treatment/hospital-details', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'completed'

      res.redirect('/application/_8-other-comp/context-prev-compensation')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // END__######################################################################################################
}
