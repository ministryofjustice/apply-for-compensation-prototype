module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation-amount'
  //
  router.post('/application/compensation-amountamount', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page/')
    }
      res.redirect('/application/check-your-answers-page/index')
  })

  // Pass the question in to the page
  router.get('/application/compensation-amount/', function (req, res) {
    res.render('application/compensation-amount/index', content)
  })
  // END__######################################################################################################
}
