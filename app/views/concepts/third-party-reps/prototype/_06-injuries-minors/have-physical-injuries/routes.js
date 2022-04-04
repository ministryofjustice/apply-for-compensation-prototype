module.exports = function (router, content) {

router.post('/concepts/third-party-reps/prototype/_06-injuries-minors/have-physical-injuries', function (req, res) {
  // Get the answer from the query string
  var havePhysicalInjuries = req.session.data['havePhysicalInjuries']

  if (havePhysicalInjuries === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/infection')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-minors/injured-body-parts')
  }
})

// END__######################################################################################################
}
