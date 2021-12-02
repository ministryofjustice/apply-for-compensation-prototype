module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_6-impact/se-any-other', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_7-treatment/context-treatment')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_6-impact/se-any-other/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_6-impact/se-any-other/index', content)
  })
  // END__######################################################################################################
}
