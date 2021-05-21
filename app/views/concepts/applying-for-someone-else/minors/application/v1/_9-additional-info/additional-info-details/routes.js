module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details', function (req, res) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/index', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/error', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/additional-info-details/transition', content)
  })
  // END__######################################################################################################
}
