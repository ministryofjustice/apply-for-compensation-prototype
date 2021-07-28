module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_7-treatment/dentist-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']


    if (visitedGP === 'No') {
        res.redirect('/application/_7-treatment/hospital-visited/')
      } else {
        res.redirect('/application/_8-other-comp/context-prev-compensation')
      }
  })

  // Pass the question in to the page
  router.get('/application/_7-treatment/dentist-details/', function (req, res) {
    res.render('application/_7-treatment/dentist-details/index', content)
  })

  // END__######################################################################################################
}
