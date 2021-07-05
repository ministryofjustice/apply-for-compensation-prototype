module.exports = function (router, content) {

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
  }
})

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/vosaa', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details-vosaa')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
  }
})

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
})

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details-vosaa', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
})

// END__######################################################################################################
}
