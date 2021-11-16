module.exports = function (router, content) {
// START__####################################################################################################
// File: Finished Treatment

router.post('/application/_7-treatment/finished-treatment', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    res.redirect('/application/_7-treatment/gp-registered')

  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

// Pass the question in to the page
router.get('/application/_7-treatment/finished-treatment/', function (req, res) {
  res.render('application/_7-treatment/finished-treatment/index', content)
})


// END__######################################################################################################
}
