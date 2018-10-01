module.exports = function (router) {
  // START__####################################################################################################
  // File: tell-criminal-convictions
  // this view is called if user says yes to convicted of a criminal offence

  router.post('/application/tell-criminal-convictions', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/bridge')
  })
  // END__######################################################################################################
}
