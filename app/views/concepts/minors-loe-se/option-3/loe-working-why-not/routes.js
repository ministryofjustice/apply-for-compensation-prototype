module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/loe-working-why-not', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-3/loe-daily-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/loe-working-why-not/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/loe-working-why-not/index', content)
  })
  // END__######################################################################################################
}
