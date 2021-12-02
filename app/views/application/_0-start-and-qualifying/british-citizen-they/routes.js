module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen-they
// Variable: britishCitizen

router.post('/application/_0-start-and-qualifying/british-citizen-they', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_0-start-and-qualifying/transition')
  } else {
    res.redirect('/application/_0-start-and-qualifying/parent-guardian')
  }
})

// Pass the question in to the page
router.get('/application/_0-start-and-qualifying/british-citizen-they/', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-they/index', content)
})

router.get('/application/_0-start-and-qualifying/british-citizen-they/british-citizen-they-error', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-they/british-citizen-they-error', content)
})

router.get('/application/_0-start-and-qualifying/british-citizen-they/transition', function (req, res) {
  res.render('application/_0-start-and-qualifying/british-citizen-they/transition', content)
})

// END__######################################################################################################
}
