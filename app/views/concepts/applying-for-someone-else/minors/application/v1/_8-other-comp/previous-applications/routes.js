module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications', function (req, res) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
      }
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/other-compensation')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications/index', content)
  })

  // Pass the error content in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications/error', content)
  })
  // END__######################################################################################################
}
