module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/application/_2-applying-for-minors/_5-injuries/context-physical-injuries', function (req, res) {
  res.redirect('/application/_2-applying-for-minors/_5-injuries/have-physical-injuries')
})

// Pass the question in to the page
router.get('/application/_2-applying-for-minors/_5-injuries/context-physical-injuries/', function (req, res) {
  res.render('application/_2-applying-for-minors/_5-injuries/context-physical-injuries/index', content)
})

// END__######################################################################################################
}
