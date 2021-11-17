module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_1-adult/_5-injuries/injured-body-parts/legs/tissue', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

      res.redirect('/application/_1-adult/_5-injuries/infection/')

    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
      }
  })
}
