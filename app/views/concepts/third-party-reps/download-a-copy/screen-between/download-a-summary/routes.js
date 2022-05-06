module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/download-a-copy/screen-between/download-a-summary', function (req, res) {
    return res.redirect('/concepts/third-party-reps/download-a-copy/screen-between/declaration')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/download-a-copy/screen-between/download-a-summary/', function (req, res) {
    res.render('concepts/third-party-reps/download-a-copy/screen-between/download-a-summary/index', content)
  })

  // END__######################################################################################################
}
