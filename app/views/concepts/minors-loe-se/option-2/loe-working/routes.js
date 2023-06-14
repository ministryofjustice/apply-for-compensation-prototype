module.exports = function (router, content) {

router.post('/concepts/minors-loe-se/option-2/loe-working', function (req, res) {
  // Get the answer from the query string
  var workStatus = req.session.data['workStatus']

  if (workStatus === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/minors-loe-se/option-2/loe-not-working-why')
  }  else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/minors-loe-se/option-2/loe-stopped-working')
  }
})

// END__######################################################################################################
}
