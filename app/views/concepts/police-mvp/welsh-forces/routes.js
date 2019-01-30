module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/police-mvp/welsh-forces', function (req, res) {
 if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
   return res.redirect('/application/check-your-answers-page')
 }
 res.redirect('/')
})

// Pass the question in to the page
router.get('/concepts/police-mvp/welsh-forces/', function (req, res) {
  res.render('concepts/police-mvp/welsh-forces/index', content)
})

router.get('/concepts/police-mvp/welsh-forces/error', function (req, res) {
  res.render('concepts/police-mvp/welsh-forces/error', content)
})
// END__######################################################################################################
}
