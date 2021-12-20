module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/main-contact-name', function (req, res) {

    var repType = req.session.data['repType']

    if ( repType === 'Claims management company' ) {
      return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/company-reg-no')
    } else {
      return res.redirect('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/rep-ref-no-question')
    }

  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_1-rep-details/main-contact-name/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_1-rep-details/main-contact-name/index', content)
  })
  // END__######################################################################################################
}
