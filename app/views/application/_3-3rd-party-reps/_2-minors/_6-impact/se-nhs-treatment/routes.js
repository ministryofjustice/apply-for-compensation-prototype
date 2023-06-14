module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_2-minors/_6-impact/se-nhs-treatment', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_6-impact/se-home-care')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_6-impact/se-nhs-treatment/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_6-impact/se-nhs-treatment/index', content)
  })
  // END__######################################################################################################
}
