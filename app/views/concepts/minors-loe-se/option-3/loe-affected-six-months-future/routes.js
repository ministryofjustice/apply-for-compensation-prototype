module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-3/loe-affected-six-months-future', function (req, res) {
    res.redirect('/concepts/minors-loe-se/option-3/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-3/loe-affected-six-months-future/', function (req, res) {
    res.render('concepts/minors-loe-se/option-3/loe-affected-six-months-future/index', content)
  })
  // END__######################################################################################################
}
