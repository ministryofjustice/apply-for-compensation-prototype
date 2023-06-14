module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/se-home-care', function (req, res) {





      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/se-home-alterations')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/se-home-care/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/se-home-care/index', content)
  })
  // END__######################################################################################################
}
