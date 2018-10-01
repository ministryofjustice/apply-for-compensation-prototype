module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-details-police-officer
  //
  router.post('/application/reporting-details-police-officer', function (req, res) {
   res.redirect('/application/crime-reference')
  })
  
  // Pass the question in to the page
  router.get('/application/reporting-details-police-officer/', function (req, res) {
    res.render('application/reporting-details-police-officer/index', content)
  })
  // END__######################################################################################################
}
