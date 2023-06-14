module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/third-party-reps/prototype/_08-treatment-minors/finished-treatment', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-minors/gp-registered')

})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_08-treatment-minors/finished-treatment/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_08-treatment-minors/finished-treatment/index', content)
})


// END__######################################################################################################
}
