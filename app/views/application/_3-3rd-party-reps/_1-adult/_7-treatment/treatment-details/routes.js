module.exports = function (router, content) {

router.post('/application/_3-3rd-party-reps/_1-adult/_7-treatment/treatment-details', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string
    var haveDMI = req.session.data['dmiDoYouHave']

    if (haveDMI === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_7-treatment/dmi-treatment-types')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_7-treatment/finished-treatment')
    }
  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

// END__######################################################################################################
}
