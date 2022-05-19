module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/download-a-copy/screen-between-v3/download-question', function (req, res) {
    var downloadQuestion = req.session.data['downloadQuestion']

      if (downloadQuestion === 'No') {
        // Redirect to the relevant page
        return res.redirect('/concepts/third-party-reps/download-a-copy/screen-between-v3/declaration')
      } else {
        // If the variable is any other value (or is missing) render the page requested
        return res.redirect('/concepts/third-party-reps/download-a-copy/screen-between-v3/download-a-summary')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/download-a-copy/screen-between-v3/download-question/', function (req, res) {
    res.render('concepts/third-party-reps/download-a-copy/screen-between-v3/download-question/index', content)
  })

  // END__######################################################################################################
}
