module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_4-offender/context-contact-with-offender', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {

      // set section status to completed
      req.session.data['about_the_offender_status'] = 'in progress'

      res.redirect('/application/_4-offender/do-you-know-offender-name')

    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/context-contact-with-offender/', function (req, res) {
    res.render('application/_4-offender/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
