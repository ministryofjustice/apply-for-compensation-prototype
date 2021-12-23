module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult/index', content)
  })
  // END__######################################################################################################
}
