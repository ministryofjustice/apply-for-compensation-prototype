module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/ineligible-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/ineligible-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/ineligible-injuries/index', content)
  })
  // END__######################################################################################################
}
