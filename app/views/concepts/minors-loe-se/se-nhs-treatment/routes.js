module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/se-nhs-treatment', function (req, res) {
    res.redirect('/concepts/minors-loe-se/se-home-care')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/se-nhs-treatment/', function (req, res) {
    res.render('concepts/minors-loe-se/se-nhs-treatment/index', content)
  })
  // END__######################################################################################################
}
