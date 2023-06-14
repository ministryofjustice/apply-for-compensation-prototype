module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_2-minors/transition-non-parent')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/authority-to-apply')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian/', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian/index', content)
  })
  // Error state
  router.get('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian/error', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/filter-non-parents/option-1/parent-guardian/error', content)
  })
  // END__######################################################################################################
}
