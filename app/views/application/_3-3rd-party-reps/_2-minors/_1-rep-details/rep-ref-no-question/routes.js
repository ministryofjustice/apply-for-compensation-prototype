module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge

  router.post('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no-question', function (req, res) {

    var repRefNoQ = req.session.data['repRefNoQ']

    if ( repRefNoQ === 'Yes' ) {
      return res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no')
    } else {
      return res.redirect('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/address-org')
    }


  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no-question/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_2-minors/_1-rep-details/rep-ref-no-question/index', content)
  })
  // END__######################################################################################################
}
