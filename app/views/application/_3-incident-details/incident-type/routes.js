module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-type
  // Variable: sexualAssault

  router.post('/application/_3-incident-details/incident-type', function (req, res) {
      res.redirect('/application/_3-incident-details/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/incident-type/', function (req, res) {
    res.render('application/_3-incident-details/incident-type/index', content)
  })
  // Error stapplication/_3-incident-details/
  router.get('/application/_3-incident-details/incident-type/error', function (req, res) {
    res.render('application/_3-incident-details/incident-type/error', content)
  })
  // Transition state
  router.get('/application/_3-incident-details/incident-type/transition', function (req, res) {
    res.render('application/_3-incident-details/incident-type/transition', content)
  })
  // END__######################################################################################################
}
