module.exports = function (router, content) {

router.post('/application/_7-financial-losses/lost-earnings', function (req, res) {
  // Get the answer from the query string
  var lossEarningsClaim = req.session.data['lossEarningsClaim']

  if (lossEarningsClaim === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/_7-financial-losses/work-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_7-financial-losses/special-expenses')
  }
})

// END__######################################################################################################
}
