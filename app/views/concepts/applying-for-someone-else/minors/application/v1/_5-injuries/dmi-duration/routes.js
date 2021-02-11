module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration', function (req, res) {
  res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/how-it-affected-you')
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration/index', content)
})

router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
