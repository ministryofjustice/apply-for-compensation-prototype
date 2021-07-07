module.exports = function (router, content) {

router.post('/application/_5-injuries/context-pregnancy', function (req, res) {
  // Get the answer from the query string
  var incidentType = req.session.data['incidentType']

  if (incidentType === 'Sexual assault or abuse') {
    // Redirect to the relevant page
    res.redirect('/application/_5-injuries/pregnancy')

  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_5-injuries/pregnancy/loss')
  }
})

// Pass the question in to the page
router.get('/application/_5-injuries/context-pregnancy/', function (req, res) {
  res.render('application/_5-injuries/context-pregnancy/index', content)
})


// END__######################################################################################################
}
