module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/third-party-reps/prototype/_04-incident-details-minors/police-force', function (req, res) {
   res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/crime-reference')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_04-incident-details-minors/police-force/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_04-incident-details-minors/police-force/index', content)
  })


  // END__######################################################################################################
}
