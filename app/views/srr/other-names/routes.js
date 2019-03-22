module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/srr/other-names', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/srr/other-names')
    }
    res.redirect('/srr/date-of-birth')
  })

  // Pass the question in to the page
  router.get('/srr/other-names', function (req, res) {
    res.render('/srr/other-names/index', content)
  })
  // Pass the question in to the page
  router.get('/srr/other-names/error', function (req, res) {
    res.render('/srr/other-names/error', content)
  })
  // END__######################################################################################################
}
