module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/finished-treatment', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/gp-registered')

})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/finished-treatment/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_7-treatment/finished-treatment/index', content)
})


// END__######################################################################################################
}
