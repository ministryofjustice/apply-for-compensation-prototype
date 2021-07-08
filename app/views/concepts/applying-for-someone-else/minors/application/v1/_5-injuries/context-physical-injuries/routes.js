module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-physical-injuries', function (req, res) {
  res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/have-physical-injuries')
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-physical-injuries/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-physical-injuries/index', content)
})

// END__######################################################################################################
}
