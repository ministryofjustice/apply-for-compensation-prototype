module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/se-context', function (req, res) {





      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/se-nhs-treatment')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/se-context/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/se-context/index', content)
  })
  // END__######################################################################################################
}
