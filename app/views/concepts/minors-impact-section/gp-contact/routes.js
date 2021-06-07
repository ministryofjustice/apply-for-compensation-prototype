module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/minors-impact-section/gp-contact', function (req, res) {
    res.redirect('/concepts/end')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-impact-section/gp-contact/', function (req, res) {
    res.render('concepts/minors-impact-section/gp-contact/index', content)
  })
  // END__######################################################################################################
}
