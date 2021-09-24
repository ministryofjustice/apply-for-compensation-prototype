module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/index', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/error', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/over-18/transition', content)
  })
  // END__######################################################################################################
}
