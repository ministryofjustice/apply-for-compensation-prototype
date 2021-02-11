module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-type
  // Variable: sexualAssault

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type', function (req, res) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/index', content)
  })
  // Error stconcepts/applying-for-someone-else/minors/application/v1/_3-incident-details/
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/error', content)
  })
  // Transition state
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/transition', content)
  })
  // END__######################################################################################################
}
