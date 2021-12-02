module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/_2-minors/_7-treatment/finished-treatment', function (req, res) {
    res.redirect('/application/_2-minors/_7-treatment/gp-registered')

})

// Pass the question in to the page
router.get('/application/_2-minors/_7-treatment/finished-treatment/', function (req, res) {
  res.render('application/_2-minors/_7-treatment/finished-treatment/index', content)
})


// END__######################################################################################################
}
