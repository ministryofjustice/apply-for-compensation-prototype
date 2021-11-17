module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/_0-start-and-qualifying/start-page', function (req, res) {
    req.session.data = {}   // clear all session data
    return res.redirect('/application/_0-start-and-qualifying/fatal-application')
  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/start-page/', function (req, res) {
    res.render('application/_0-start-and-qualifying/start-page/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/start-page/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/start-page/error', content)
  })
  // END__######################################################################################################
}
