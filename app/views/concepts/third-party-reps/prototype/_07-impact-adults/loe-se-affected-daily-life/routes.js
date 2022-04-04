module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life', function (req, res) {





      var stoppedWorking = req.session.data['stoppedWorking']

      if (stoppedWorking === "No") {

        // set section status to completed
        req.session.data['impact_status'] = 'completed'

        res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/context-treatment')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/se-context')
      }



  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life/index', content)
  })
  // END__######################################################################################################
}
