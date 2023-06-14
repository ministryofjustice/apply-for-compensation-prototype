module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: otherDetailsQ

  router.post('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question', function (req, res) {

      // Get the answer from the query string
      var applicationAdditionalInfoQ = req.session.data['applicationAdditionalInfoQ']

      if (applicationAdditionalInfoQ === 'Yes') {

        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-details')
      } else {
        res.redirect('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/check-your-answers')
        }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/', function (req, res) {
    res.render('concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/index', content)
  })
  //error page
  router.get('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/error', function (req, res) {
    res.render('concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/error', content)
  })
  //error page
  router.get('/concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/transition', function (req, res) {
    res.render('concepts/third-party-reps/download-a-copy/print-screen-on-cya/_10-additional-info-adults/additional-info-question/transition', content)
  })
  // END__######################################################################################################
}
