module.exports = function (router, content) {

router.post('/application/_1-adult/_5-injuries/pregnancy', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    res.redirect('/application/_1-adult/_5-injuries/pregnancy/loss')

  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

router.post('/application/_1-adult/_5-injuries/pregnancy/loss', function (req, res) {
    res.redirect('/application/_1-adult/_5-injuries/context-about-dmi')
})

// END__######################################################################################################
}
