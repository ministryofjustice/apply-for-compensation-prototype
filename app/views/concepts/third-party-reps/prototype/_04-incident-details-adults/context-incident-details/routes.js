module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details', function (req, res) {

        // set section status for task list
        req.session.data['about_the_crime_status'] = 'in progress'

        res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/incident-type')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details/index', content)
  })
  // END__######################################################################################################
}
