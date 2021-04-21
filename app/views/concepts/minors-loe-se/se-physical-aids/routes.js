module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/se-physical-aids', function (req, res) {
    res.redirect('/concepts/minors-loe-se/se-nhs-treatment')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/se-physical-aids/', function (req, res) {
    res.render('concepts/minors-loe-se/se-physical-aids/index', content)
  })
  // END__######################################################################################################
}
