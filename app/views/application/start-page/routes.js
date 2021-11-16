module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/start-page', function (req, res) {
    // req.session.data = {} // clear all session data
    return res.redirect('/application/_1-qualifying/fatal-application')
  })

  // Pass the question in to the page
  router.get('/application/start-page/', function (req, res) {
    res.render('application/start-page/index', content)
  })
  // Pass the question in to the page
  router.get('/application/start-page/error', function (req, res) {
    res.render('application/start-page/error', content)
  })
  // END__######################################################################################################
}
