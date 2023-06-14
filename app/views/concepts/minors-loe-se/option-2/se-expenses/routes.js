module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-2/se-expenses', function (req, res) {
    res.redirect('/concepts/end')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/option-2/se-expenses/', function (req, res) {
    res.render('concepts/minors-loe-se/option-2/se-expenses/index', content)
  })
  // END__######################################################################################################
}
