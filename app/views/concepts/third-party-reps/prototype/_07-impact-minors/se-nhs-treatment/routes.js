module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-minors/se-nhs-treatment', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/se-home-care')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-minors/se-nhs-treatment/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-minors/se-nhs-treatment/index', content)
  })
  // END__######################################################################################################
}
