module.exports = function (router, content) {

router.post('/application/_5-injuries/infection', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_5-injuries/context-pregnancy')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_5-injuries/infection/details')
  }
})

router.post('/application/_5-injuries/infection/vosaa', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_5-injuries/context-pregnancy')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_5-injuries/infection/details-vosaa')
  }
})

router.post('/application/_5-injuries/infection/details', function (req, res) {
    res.redirect('/application/_5-injuries/context-pregnancy')
})

router.post('/application/_5-injuries/infection/details-vosaa', function (req, res) {
    res.redirect('/application/_5-injuries/context-pregnancy')
})

// END__######################################################################################################
}
