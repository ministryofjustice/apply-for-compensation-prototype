module.exports = function (router) {
  // START__####################################################################################################
  // File: reporting-details-what-force
  //
  router.post('/application/reporting-details-what-force', function (req, res) {
   res.redirect('/application/reporting-details-police-officer')
  })

  // Pass the question in to the page
  router.get('/application/reporting-details-what-force/', function (req, res) {
    res.render('application/reporting-details-what-force/index', { 'policeForceQuestion': 'What police force was the crime reported to?' })
  })
  // END__######################################################################################################
}
