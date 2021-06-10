module.exports = function (router, content) {

router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/treatment-details', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/dmi-treatment-types')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/finished-treatment')
  }
})

// END__######################################################################################################
}
