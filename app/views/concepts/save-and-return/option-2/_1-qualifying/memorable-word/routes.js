module.exports = function (router, content) {
  // START__####################################################################################################
  // File: memorable-word
  // Variable: direct-applicant

  router.post('/concepts/save-and-return/option-2/_1-qualifying/memorable-word', function (req, res) {
    res.redirect('/concepts/save-and-return/option-2/_2-your-details/context-your-details')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-2/_1-qualifying/memorable-word/', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/memorable-word/index', content)
  })
  // Error state
  router.get('/concepts/save-and-return/option-2/_1-qualifying/memorable-word/error', function (req, res) {
    res.render('concepts/save-and-return/option-2/_1-qualifying/memorable-word/error', content)
  })
  // END__######################################################################################################
}
