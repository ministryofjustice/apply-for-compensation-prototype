module.exports = function (router, content) {

router.post('/application/_5-injuries/have-physical-injuries', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']

    if (havePhysicalInjuries === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/_5-injuries/infection')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_5-injuries/injured-body-parts')
    }

  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
  
})

// END__######################################################################################################
}
