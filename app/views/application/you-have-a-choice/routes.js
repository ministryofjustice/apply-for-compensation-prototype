module.exports = function (router) {
  // START__####################################################################################################
  // File: you-have-a-choice


  router.post('/application/you-have-a-choice', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/your-choices')
  })
  // END__######################################################################################################
}
