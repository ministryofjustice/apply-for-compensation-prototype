module.exports = function (router, content) {

router.post('/application/_7-treatment/treatment-details', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/_7-treatment/dmi-treatment-types')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_7-treatment/finished-treatment')
  }
})

// END__######################################################################################################
}
