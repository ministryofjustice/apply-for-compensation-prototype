module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another-document', function (req, res) {
  // Get the answer from the query string

  res.redirect('/concepts/parents-applying-for-minors/minors/single-or-multiple-incidents')
  
})



// Pass the question in to the page
router.get('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another-document', function (req, res) {
  res.render('concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-3/upload-another-document/index', content)
})


// END__######################################################################################################
}
