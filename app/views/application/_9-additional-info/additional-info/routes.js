module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_9-additional-info/additional-info', function (req, res) {
      res.redirect('/application/_10-end/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/application/_9-additional-info/additional-info/', function (req, res) {
    res.render('application/_9-additional-info/additional-info/index', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info/error', function (req, res) {
    res.render('application/_9-additional-info/additional-info/error', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info/transition', function (req, res) {
    res.render('application/_9-additional-info/additional-info/transition', content)
  })
  // END__######################################################################################################
}
