module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/context-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/infection')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/context-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
