module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/se-physical-aids', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/se-any-other')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/se-physical-aids/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/se-physical-aids/index', content)
  })
  // END__######################################################################################################
}
