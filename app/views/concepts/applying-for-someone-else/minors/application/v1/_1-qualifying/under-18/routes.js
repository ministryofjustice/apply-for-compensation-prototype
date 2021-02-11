module.exports = function (router, content) {
  // START__####################################################################################################
  // File: under-18
  // Variable: under18

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18', function (req, res) {
    // Get the answer from the query string
    var under18 = req.session.data['under18']

    if (under18 === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/index', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/error', content)
  })
  //error page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/transition', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/transition', content)
  })
  // END__######################################################################################################
}
