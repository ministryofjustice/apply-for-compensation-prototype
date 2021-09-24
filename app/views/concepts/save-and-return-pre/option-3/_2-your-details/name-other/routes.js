module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-pre/option-3/_2-your-details/name-other', function (req, res) {

    var buttonClicked = req.session.data['buttonClicked'];

    if (buttonClicked === 'Continue') {
      res.redirect('/concepts/save-and-return-pre/option-3/_2-your-details/date-of-birth')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/concepts/save-and-return-pre/option-3/confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/_2-your-details/name-other/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/_2-your-details/name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/_2-your-details/name-other/error', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/_2-your-details/name-other/error', content)
  })
  // END__######################################################################################################
}
