module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-minors/_6-impact/loe-context', function (req, res) {
    res.redirect('/application/_2-minors/_6-impact/loe-working-age')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_6-impact/loe-context/', function (req, res) {
    res.render('application/_2-minors/_6-impact/loe-context/index', content)
  })
  // END__######################################################################################################
}
