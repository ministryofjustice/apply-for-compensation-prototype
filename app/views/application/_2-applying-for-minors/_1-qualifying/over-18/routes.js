module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_2-applying-for-minors/_1-qualifying/over-18', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/_2-applying-for-minors/transition')
    } else {
      res.redirect('/application/_2-applying-for-minors/_1-qualifying/british-citizen')
    }
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_1-qualifying/over-18/', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/over-18/index', content)
  })
  //error page
  router.get('/application/_2-applying-for-minors/_1-qualifying/over-18/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/over-18/error', content)
  })
  //error page
  router.get('/application/_2-applying-for-minors/_1-qualifying/over-18/transition', function (req, res) {
    res.render('application/_2-applying-for-minors/_1-qualifying/over-18/transition', content)
  })
  // END__######################################################################################################
}
