module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-applying-for-minors/_6-impact/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_6-impact/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_6-impact/loe-stopped-working-how-long/', function (req, res) {
    res.render('application/_2-applying-for-minors/_6-impact/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
