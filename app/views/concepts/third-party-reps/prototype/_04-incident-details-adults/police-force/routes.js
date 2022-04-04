module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-adults/police-force', function (req, res) {

      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/crime-reference')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-adults/police-force/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-adults/police-force/index', content)
  })


  // END__######################################################################################################
}
