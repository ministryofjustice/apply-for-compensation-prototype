module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/context-may-not-be-eligible')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/authority-to-apply')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof/', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof/index', content)
  })
  // Error state
  router.get('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof/error', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/filter-non-parents/option-2/parent-guardian-proof/error', content)
  })
  // END__######################################################################################################
}
