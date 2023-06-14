module.exports = function (router, content) {

router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/treatment-details', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/dmi-treatment-types')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/finished-treatment')
  }
})

// END__######################################################################################################
}
