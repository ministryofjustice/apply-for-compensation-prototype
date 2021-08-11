module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/save-and-return/option-1/one-time-password', function (req, res) {
    res.redirect('/concepts/save-and-return/option-1/application-progress')
  })

  // Pass the question in to the page
  router.get('/concepts/save-and-return/option-1/one-time-password/', function (req, res) {
    res.render('concepts/save-and-return/option-1/one-time-password/index', content)
  })

  // END__######################################################################################################
}
