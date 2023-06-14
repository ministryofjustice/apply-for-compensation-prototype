module.exports = function (router, content) {
  // START__####################################################################################################

  /* >>>>> Existing or new <<<<< */
  router.post('/concepts/divert-duplicate-apps/app/existing-or-new', function (req, res) {
    var existingOrNew = req.session.data['existingOrNew']
    if (existingOrNew === 'Update an existing application') {
      res.redirect('/concepts/divert-duplicate-apps/app/transition')
    } else {
      res.redirect('/concepts/divert-duplicate-apps/app/fatal-application')
    }
  })

  /* >>>>> Who is applying <<<<< */
  router.post('/concepts/divert-duplicate-apps/app/who-is-making-the-application-router', function (req, res) {
    var directApplicant = req.session.data['direct-applicant']
    if (directApplicant === 'Someone else') {
      res.redirect('/concepts/divert-duplicate-apps/app/context-victim-details')
    } else {
      res.redirect('/concepts/divert-duplicate-apps/app/context-screen')
    }
  })

  /* >>>>> Fatal application <<<<< */
  router.post('/concepts/divert-duplicate-apps/app/fatal-application', function (req, res) {
      res.redirect('/concepts/end')
  })

  // END__######################################################################################################
}