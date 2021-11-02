module.exports = function (router, content) {

router.post('/application/_7-treatment/treatment-details', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if (buttonClicked === 'Continue') {

    // Get the answer from the query string
    var haveDMI = req.session.data['dmiDoYouHave']

    if (haveDMI === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/_7-treatment/dmi-treatment-types')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_7-treatment/finished-treatment')
    }
  } else if (buttonClicked === 'Save and finish later') {
    return res.redirect('/application/_0-start-screens/save-confirmation')
  }
})

// END__######################################################################################################
}
