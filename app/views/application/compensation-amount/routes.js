module.exports = function (router) {
  // START__####################################################################################################
  // File: compensation-amount'
  //
  router.post('/application/compensation-amount', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page/')
    }
      res.redirect('/application/check-your-answers-page/index')
  })
  // END__######################################################################################################
}
