module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/England-Regions', function (req, res) {
  // Get the answer from the query string
  var englandRegions = req.session.data['englandRegions']

  if (englandRegions === 'Inner London') {
    // Redirect to the relevant page
    res.redirect('/application/inner-london-areas')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/over-18')
  }
})

// Pass the question in to the page
router.get('/application/England-Regions/', function (req, res) {
  res.render('application/England-Regions/index', content)
})


// END__######################################################################################################
}
