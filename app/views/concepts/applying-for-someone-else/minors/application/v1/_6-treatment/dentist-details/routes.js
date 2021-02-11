module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']

    
    if (visitedGP === 'No') {
        res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-visited/')
      } else {
        res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-financial-losses/context-your-money/')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-details/index', content)
  })

  // END__######################################################################################################
}
