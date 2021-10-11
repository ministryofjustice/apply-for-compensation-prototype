module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words', function (req, res) {
    // Get the answer from the query string
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/index', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/error', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/transition', content)
  })
  // END__######################################################################################################
}
