module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply
  // Variable: direct-applicant

  router.post('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/authority-to-apply', function (req, res) {
    // Get the answer from the query string
    var legalGuardian = req.session.data['legalGuardian']

    if (legalGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/authority-to-apply/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/parents-applying-for-minors/minors/end')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/authority-to-apply/', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/filter-non-parents/option-3/authority-to-apply/index', content)
  })

  // END__######################################################################################################
}
