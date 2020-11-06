module.exports = function (router, content) {

router.post('/application/_5-injuries/have-physical-injuries', function (req, res) {
  // Get the answer from the query string
  var havePhysicalInjuries = req.session.data['havePhysicalInjuries']

  if (havePhysicalInjuries === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_5-injuries/context-about-dmi')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_5-injuries/injured-body-parts')
  }
})

// END__######################################################################################################
}
