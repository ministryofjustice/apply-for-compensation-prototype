module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/name-change-uploaded', function (req, res) {
  // Get the answer from the query string
  var anotherDoc = req.session.data['changed-name']

  if (anotherDoc === 'yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/single-or-multiple-incidents')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/name-change-uploaded', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/name-change-uploaded/index', content)
})

// END__######################################################################################################
}
