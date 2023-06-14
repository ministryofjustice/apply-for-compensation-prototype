module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_2-minors/_6-impact/se-special-equipment', function (req, res) {
    res.redirect('/application/_2-minors/_6-impact/se-physical-aids')
  })

  // Pass the question in to the page
  router.get('/application/_2-minors/_6-impact/se-special-equipment/', function (req, res) {
    res.render('application/_2-minors/_6-impact/se-special-equipment/index', content)
  })
  // END__######################################################################################################
}
