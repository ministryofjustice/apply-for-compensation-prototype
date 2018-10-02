module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation-page-if-automatic-nil
  // variable: apply-for-review

  router.post('/application/confirmation-page-if-automatic-nil', function (req, res) {
    // Get the answer from the query string
    var applyForReview = req.session.data['apply-for-review']

    if (applyForReview  === 'yes') {
      // Redirect to the relevant page
      res.redirect('/application/confirmation-of-review')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })
  // END__######################################################################################################
}
