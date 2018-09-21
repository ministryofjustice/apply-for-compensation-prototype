module.exports = function (router) {
  // START__####################################################################################################
  // File: reporting-details-what-force
  //
  router.post('/application/reporting-details-what-force', function (req, res) {
   res.redirect('/application/reporting-details-police-officer')
  })
  // END__######################################################################################################
}
