module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/se-any-other', function (req, res) {
    res.redirect('/application/_7-treatment/context-treatment')
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/se-any-other/', function (req, res) {
    res.render('application/_6-impact/se-any-other/index', content)
  })
  // END__######################################################################################################
}
