module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate', function (req, res) {
    // Get the answer from the query string
    var parentGuardian = req.session.data['parentGuardian']

    if (parentGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/other-proof')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate-proof')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate/index', content)
  })
  // Error state
  router.get('/concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/filter-non-parents/option-3/birth-certificate/error', content)
  })
  // END__######################################################################################################
}
