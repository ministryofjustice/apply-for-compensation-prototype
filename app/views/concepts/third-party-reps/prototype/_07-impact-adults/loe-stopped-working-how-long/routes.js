module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working-how-long', function (req, res) {





      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life')



  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working-how-long/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working-how-long/index', content)
  })
  // END__######################################################################################################
}
