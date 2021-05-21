module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/context-additional-info', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-question')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/context-additional-info/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/context-additional-info/index', content)
  })
  // END__######################################################################################################
}
