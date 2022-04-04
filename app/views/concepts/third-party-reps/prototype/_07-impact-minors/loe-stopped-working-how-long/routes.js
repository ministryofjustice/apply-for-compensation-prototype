module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-minors/loe-stopped-working-how-long', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_07-impact-minors/loe-se-future-capacity')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-minors/loe-stopped-working-how-long/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-minors/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
