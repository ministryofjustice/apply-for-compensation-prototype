module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working', function (req, res) {






      // Get the answer from the query string
      var stoppedWorking = req.session.data['stoppedWorking']

      if (stoppedWorking === 'No') {

        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-se-affected-daily-life')
      } else {

        // set section status to completed
        req.session.data['impact_status'] = 'in progress'
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working-how-long')
      }



  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/loe-stopped-working/index', content)
  })
  // END__######################################################################################################
}
