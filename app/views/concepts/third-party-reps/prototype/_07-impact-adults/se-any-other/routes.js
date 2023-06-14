module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/se-any-other', function (req, res) {





      // set section status to completed
      req.session.data['impact_status'] = 'completed'

      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/se-any-other/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/se-any-other/index', content)
  })
  // END__######################################################################################################
}
