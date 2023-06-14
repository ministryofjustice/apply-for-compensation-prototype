module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options', function (req, res) {

    var repConfirmationPreference = req.session.data['repConfirmationPreference']

    if (!req.session.data['repEmailAddress']) {
      req.session.data['repEmailAddress'] = ''
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_1-adult/_11-end/check-your-answers-page')
    } else if ((repConfirmationPreference === 'Email') || (repConfirmationPreference === 'Text')) {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/name')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/transition')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
