module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/save-and-return/option-3/confirmation', function (req, res) {
    res.redirect('/concepts/save-and-return/option-3/send-confirmation-question')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-3/confirmation/', function (req, res) {
    res.render('concepts/save-and-return/option-3/confirmation/index', content)
  })
  // END__######################################################################################################
}
