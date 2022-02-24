module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/email-address', function (req, res) {

    var repType = req.session.data['rep-type']

    if (repType === 'Claims management company') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/company-reg-no')
    } else if (repType === 'Solicitor') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/rep-ref-no-question')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/email-address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/email-address/index', content)
  })
  // END__######################################################################################################
}
