module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question', function (req, res) {

    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-adults/context-incident-details')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details-minors/context-incident-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question/index', content)
  })
  // END__######################################################################################################
}
