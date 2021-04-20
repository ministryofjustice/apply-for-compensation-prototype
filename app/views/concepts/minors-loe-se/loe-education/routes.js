module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/loe-education', function (req, res) {
    res.redirect('/concepts/minors-loe-se/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/minors-loe-se/loe-education/', function (req, res) {
    res.render('concepts/minors-loe-se/loe-education/index', content)
  })
  // END__######################################################################################################
}
