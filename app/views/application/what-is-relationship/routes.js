module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/application/what-is-relationship', function (req, res) {

    if(req.session.checking_answers) {
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/previous-applications')
  })

  // Pass the question in to the page
  router.get('/application/what-is-relationship/', function (req, res) {
    res.render('application/what-is-relationship/index', content)
  })

  // END__######################################################################################################
}
