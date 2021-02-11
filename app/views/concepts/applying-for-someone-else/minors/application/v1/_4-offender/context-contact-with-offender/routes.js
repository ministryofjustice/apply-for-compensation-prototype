module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
