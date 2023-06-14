module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info', function (req, res) {





      // set section status to completed
      req.session.data['additional_info_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_10-additional-info-adults/additional-info-question')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info/index', content)
  })
  // END__######################################################################################################
}
