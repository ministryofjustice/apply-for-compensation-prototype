module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/se-any-other', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-impact/se-any-other/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-impact/se-any-other/index', content)
  })
  // END__######################################################################################################
}
