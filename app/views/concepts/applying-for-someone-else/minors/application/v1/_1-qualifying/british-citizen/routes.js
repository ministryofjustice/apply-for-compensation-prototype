module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/transition')
  } else {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/index', content)
})

router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/british-citizen-error', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/british-citizen-error', content)
})

router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/transition', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/transition', content)
})

// END__######################################################################################################
}
