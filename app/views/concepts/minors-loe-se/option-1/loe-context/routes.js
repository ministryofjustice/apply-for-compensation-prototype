module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-1/loe-context', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-1/loe-working-age')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-1/loe-context/', function (req, res) {
    res.render('concepts/minors-loe-se/option-1/loe-context/index', content)
  })
  // END__######################################################################################################
}
