module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_6-treatment/dentist-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']


    if ((registeredGP === 'No') && (visitedGP === 'No')) {
        res.redirect('/application/_6-treatment/hospital-visited/')
      } else {
        res.redirect('/application/_7-financial-losses/context-your-money/')
      }
  })

  // Pass the question in to the page
  router.get('/application/_6-treatment/dentist-details/', function (req, res) {
    res.render('application/_6-treatment/dentist-details/index', content)
  })

  // END__######################################################################################################
}
