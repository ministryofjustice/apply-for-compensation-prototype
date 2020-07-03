module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/physical-injuries/one-q-page-v4/context-treatment', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/context-treatment/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/context-treatment/index', content)
  })
  // END__######################################################################################################
}
