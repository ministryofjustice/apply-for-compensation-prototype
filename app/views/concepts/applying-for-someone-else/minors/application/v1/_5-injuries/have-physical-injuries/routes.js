module.exports = function (router, content) {

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/have-physical-injuries', function (req, res) {
  // Get the answer from the query string
  var havePhysicalInjuries = req.session.data['havePhysicalInjuries']

  if (havePhysicalInjuries === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts')
  }
})

// END__######################################################################################################
}
