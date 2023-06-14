module.exports = function (router, content) {

router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/context-pregnancy', function (req, res) {
  // Get the answer from the query string
  var incidentType = req.session.data['incidentType']

  if (incidentType === 'Sexual assault or abuse') {
    // Redirect to the relevant page
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/pregnancy')

  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/pregnancy/loss')
  }
})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_06-injuries-minors/context-pregnancy/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_06-injuries-minors/context-pregnancy/index', content)
})


// END__######################################################################################################
}
