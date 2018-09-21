module.exports = function (router) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/application/name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/name-have-other')
  })
  // END__######################################################################################################
}
