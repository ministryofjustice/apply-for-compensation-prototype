module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/name', function (req, res) {

    var repType = req.session.data['rep-type']

      if (repType === 'Claims management company') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no')
    } else if (repType === 'Solicitor') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/address')
    }
  
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/name/index', content)
  })
  // END__######################################################################################################
}
