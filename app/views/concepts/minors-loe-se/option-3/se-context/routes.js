module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/se-context', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-3/se-expenses')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/se-context/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/se-context/index', content)
  })
  // END__######################################################################################################
}
