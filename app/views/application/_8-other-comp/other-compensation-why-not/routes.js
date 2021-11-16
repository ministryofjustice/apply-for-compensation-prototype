module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/_8-other-comp/other-compensation-why-not', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status to completed
      req.session.data['other_compensation_status'] = 'completed'

      res.redirect('/application/_9-additional-info/context-additional-info')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
 })

 // Pass the question in to the page
 router.get('/application/_8-other-comp/other-compensation-why-not/', function (req, res) {
   res.render('application/_8-other-comp/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
