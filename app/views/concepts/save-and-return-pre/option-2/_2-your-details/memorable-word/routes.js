module.exports = function (router, content) {
  // START__####################################################################################################
  // File: memorable-word
  // Variable: direct-applicant

  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/memorable-word', function (req, res) {
    res.redirect('/concepts/save-and-return-pre/option-2/_2-your-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/memorable-word/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/memorable-word/index', content)
  })
  // Error state
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/memorable-word/error', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/memorable-word/error', content)
  })
  // END__######################################################################################################
}
