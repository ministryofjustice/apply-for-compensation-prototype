module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/loe-working-why-not', function (req, res) {





      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/loe-working-why-not/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/loe-working-why-not/index', content)
  })
  // END__######################################################################################################
}
