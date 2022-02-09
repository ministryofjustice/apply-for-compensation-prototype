module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another', function (req, res) {
  // Get the answer from the query string
  var minorUploadAnother = req.session.data['minorUploadAnother']

  if (minorUploadAnother === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another-document')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/parents-applying-for-minors/minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/parents-applying-for-minors/minors/single-or-multiple-incidents')
  }
})


// Pass the question in to the page
router.get('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another', function (req, res) {
  res.render('concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another/index', content)
})

// END__######################################################################################################
}
