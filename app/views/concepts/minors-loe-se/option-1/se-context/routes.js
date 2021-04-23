module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-1/se-context', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-1/se-physical-aids')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-1/se-context/', function (req, res) {
    res.render('concepts/minors-loe-se/option-1/se-context/index', content)
  })
  // END__######################################################################################################
}
