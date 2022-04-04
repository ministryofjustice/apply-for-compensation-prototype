module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/loe-context', function (req, res) {





      // set section status to completed
      req.session.data['impact_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/loe-working')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/loe-context/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/loe-context/index', content)
  })
  // END__######################################################################################################
}
