module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply-adult
  // Variable: direct-applicant

  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/authority-to-apply-adult', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details')
  })


  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/authority-to-apply-adult/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/authority-to-apply-adult/index', content)
  })

  // END__######################################################################################################
}
