module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/parents-applying-for-minors/minors/care-order-details', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/_2-minors/check-your-answers-page')
    }
    res.redirect('/concepts/parents-applying-for-minors/minors/your-name')
  })

  // Pass the question in to the page
  router.get('/concepts/parents-applying-for-minors/minors/care-order-details/', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/care-order-details/index', content)
  })

  router.get('/concepts/parents-applying-for-minors/minors/care-order-details/error', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/care-order-details/error', content)
  })

  // END__######################################################################################################
}
