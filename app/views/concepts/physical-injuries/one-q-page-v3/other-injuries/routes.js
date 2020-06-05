module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/other-injuries', function (req, res) {
  // Get the answer from the query string
  var haveOtherInjuries = req.session.data['haveOtherInjuries']

  if (haveOtherInjuries === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/end')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts')
  }
})

// END__######################################################################################################
}
