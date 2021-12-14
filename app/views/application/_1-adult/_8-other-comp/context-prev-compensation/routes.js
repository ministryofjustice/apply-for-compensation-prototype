module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_1-adult/_8-other-comp/context-prev-compensation', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      // set section status to completed
      req.session.data['other_compensation_status'] = 'in progress'

      res.redirect('/application/_1-adult/_8-other-comp/previous-applications')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_1-adult/_8-other-comp/context-prev-compensation/', function (req, res) {
    res.render('application/_1-adult/_8-other-comp/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}