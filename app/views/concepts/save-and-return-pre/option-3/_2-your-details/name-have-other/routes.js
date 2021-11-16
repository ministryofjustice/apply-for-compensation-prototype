module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/save-and-return-pre/option-3/_2-your-details/name-have-other', function (req, res) {

    var haveOtherName = req.session.data['haveOtherName'];
    var buttonClicked = req.session.data['buttonClicked'];

    if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {
      if (haveOtherName === 'No')  {
        return res.redirect('/concepts/save-and-return-pre/option-3/_2-your-details/date-of-birth')
      }
      res.redirect('/concepts/save-and-return-pre/option-3/_2-your-details/name-other')
    } else if (buttonClicked === 'Save and complete application later') {
      return res.redirect('/concepts/save-and-return-pre/option-3/confirmation')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/_2-your-details/name-have-other/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/_2-your-details/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/_2-your-details/name-have-other/error', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/_2-your-details/name-have-other/error', content)
  })
  // END__######################################################################################################
}
