module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/se-home-care', function (req, res) {
    res.redirect('/application/_6-impact/se-home-alterations')
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/se-home-care/', function (req, res) {
    res.render('application/_6-impact/se-home-care/index', content)
  })
  // END__######################################################################################################
}