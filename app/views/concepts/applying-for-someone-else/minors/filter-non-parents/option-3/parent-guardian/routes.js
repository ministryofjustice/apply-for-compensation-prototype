module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition-non-parent')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian/index', content)
  })
  // Error state
  router.get('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/filter-non-parents/option-3/parent-guardian/error', content)
  })
  // END__######################################################################################################
}
