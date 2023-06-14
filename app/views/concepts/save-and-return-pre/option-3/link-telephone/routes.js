module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return-pre/option-3/link-telephone', function (req, res) {
      res.redirect('/concepts/save-and-return-pre/option-3/telephone-confirmation/')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-3/link-telephone/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-3/link-telephone/index', content)
  })

  // END__######################################################################################################
}
