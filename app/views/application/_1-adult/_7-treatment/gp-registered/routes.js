module.exports = function (router, content) {
// START__####################################################################################################
// File: GP Registered

router.post('/application/_1-adult/_7-treatment/gp-registered', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string
      res.redirect('/application/_1-adult/_7-treatment/gp-visited')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
    }
  })

// Pass the question in to the page
router.get('/application/_1-adult/_7-treatment/gp-registered/', function (req, res) {
  res.render('application/_1-adult/_7-treatment/gp-registered/index', content)
})

// END__######################################################################################################
}
