module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender', function (req, res) {

      // set section status to completed
      req.session.data['about_the_offender_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_05-offender-adults/do-you-know-offender-name')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_05-offender-adults/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
