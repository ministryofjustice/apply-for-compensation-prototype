module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name-org', function (req, res) {

    var repType = req.session.data['repType']

    if ( repType === 'Claims management company' ) {
      return res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/company-reg-no')
    } else {
      return res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no-question')
    }

  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/name-org/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/name-org/index', content)
  })
  // END__######################################################################################################
}
