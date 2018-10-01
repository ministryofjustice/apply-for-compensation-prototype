module.exports = function (router) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/application/what-is-relationship', function (req, res) {

    if(req.session.checking_answers) {
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/name')
  })
  // END__######################################################################################################
}
