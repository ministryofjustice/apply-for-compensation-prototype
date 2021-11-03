module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_8-other-comp/context-prev-compensation', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['other_compensation_status'] = 'in progress'

      res.redirect('/application/_8-other-comp/previous-applications')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_8-other-comp/context-prev-compensation/', function (req, res) {
    res.render('application/_8-other-comp/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
