module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries', function (req, res) {

      // set section status to completed
      req.session.data['your_injuries_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/have-physical-injuries')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_06-injuries-adults/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
