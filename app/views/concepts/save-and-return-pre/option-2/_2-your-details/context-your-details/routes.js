module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/save-and-return-pre/option-2/_2-your-details/context-your-details', function (req, res) {
    res.redirect('/concepts/save-and-return-pre/option-2/_2-your-details/memorable-word')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return-pre/option-2/_2-your-details/context-your-details/', function (req, res) {
    res.render('concepts/save-and-return-pre/option-2/_2-your-details/context-your-details/index', content)
  })
  // END__######################################################################################################
}
