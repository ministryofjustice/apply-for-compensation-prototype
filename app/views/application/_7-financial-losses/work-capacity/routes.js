module.exports = function (router, content) {

router.post('/application/_7-financial-losses/work-capacity', function (req, res) {
  // Get the answer from the query string
  var workCapacity = req.session.data['workCapacity']

  if (workCapacity === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/_7-financial-losses/lost-earnings')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/_8-other-comp/context-prev-compensation')
  }
})

// END__######################################################################################################
}
