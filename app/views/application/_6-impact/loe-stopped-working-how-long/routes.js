module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/application/_6-impact/loe-se-affected-daily-life')
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-stopped-working-how-long/', function (req, res) {
    res.render('application/_6-impact/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
