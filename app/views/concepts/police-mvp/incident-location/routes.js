module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/police-mvp/incident-location', function (req, res) {

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/police-mvp/check-your-answers-page')
    }
    res.redirect('/concepts/police-mvp/england-location')
  })

  // Pass the question in to the page
  router.get('/concepts/police-mvp/incident-location/', function (req, res) {
    res.render('concepts/police-mvp/incident-location/index', content)
  })
  // END__######################################################################################################
}
