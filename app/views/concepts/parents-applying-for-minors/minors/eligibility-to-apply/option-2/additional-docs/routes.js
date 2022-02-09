module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


// Pass the question in to the page
router.get('/concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-2/additional-docs', function (req, res) {
  res.render('concepts/parents-applying-for-minors/minors/eligibility-to-apply/option-2/additional-docs/index', content)
})

router.get('/concepts/parents-applying-for-minors/minors/v1/additional-docs/additional-docs-error', function (req, res) {
  res.render('concepts/parents-applying-for-minors/minors/v1/additional-docs/additional-docs-error', content)
})

// END__######################################################################################################
}
