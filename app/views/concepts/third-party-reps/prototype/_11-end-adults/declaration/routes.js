module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/concepts/third-party-reps/prototype/_11-end-adults/declaration', function (req, res) {





      var agreeToDeclaration = req.session.data['agreeToDeclaration']
      if (agreeToDeclaration == 'agree') {

        // set section status to completed
        req.session.data['declaration_status'] = 'completed'

        res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/confirmation-page')
      } else {

        // set section status to completed
        req.session.data['declaration_status'] = 'in progress'

        res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration/error')
      }


  })

  router.post('/concepts/third-party-reps/prototype/_11-end-adults/declaration/error', function (req, res) {
    var agreeToDeclaration = req.session.data['agreeToDeclaration']
    if (agreeToDeclaration == 'agree') {

      // set section status to completed
      req.session.data['declaration_status'] = 'completed'

      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/confirmation-page')
    } else {

      // set section status to completed
      req.session.data['declaration_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration/error')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-adults/declaration/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-adults/declaration/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_11-end-adults/declaration/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_11-end-adults/declaration/error', content)
  })

  // END__######################################################################################################
}
