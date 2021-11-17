module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/_2-applying-for-minors/_1-qualifying/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_2-applying-for-minors/transition')
  } else {
    res.redirect('/application/_2-applying-for-minors/_1-qualifying/parent-guardian')
  }
})

// Pass the question in to the page
router.get('/application/_2-applying-for-minors/_1-qualifying/british-citizen/', function (req, res) {
  res.render('application/_2-applying-for-minors/_1-qualifying/british-citizen/index', content)
})

router.get('/application/_2-applying-for-minors/_1-qualifying/british-citizen/british-citizen-error', function (req, res) {
  res.render('application/_2-applying-for-minors/_1-qualifying/british-citizen/british-citizen-error', content)
})

router.get('/application/_2-applying-for-minors/_1-qualifying/british-citizen/transition', function (req, res) {
  res.render('application/_2-applying-for-minors/_1-qualifying/british-citizen/transition', content)
})

// END__######################################################################################################
}
