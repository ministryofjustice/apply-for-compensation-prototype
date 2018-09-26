module.exports = function (router) {
  // START__####################################################################################################
  // File: reporting-details-police-officer
  //
  router.post('/application/reporting-details-police-officer', function (req, res) {
   res.redirect('/application/crime-reference')
  })
  // Pass the question in to the page
  router.get('/application/reporting-details-police-officer/', function (req, res) {
    res.render('application/reporting-details-police-officer/index', { 'policeOfficerQuestion': 'What are the details of the police officer who recorded the crime?' })
  })
  // END__######################################################################################################
}
