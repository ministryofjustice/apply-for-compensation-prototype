module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number', function (req, res) {
    res.redirect('/concepts/save-and-return/resume-claim-screen/option-2/confirm-surname')
})

// Pass the question in to the page
router.get('/concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/', function (req, res) {
  res.render('concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/index', content)
})

router.get('/concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/british-citizen-error', function (req, res) {
  res.render('concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/british-citizen-error', content)
})

router.get('/concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/transition', function (req, res) {
  res.render('concepts/save-and-return/resume-claim-screen/option-2/save-and-return-number/transition', content)
})

// END__######################################################################################################
}
