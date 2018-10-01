module.exports = function (router) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/offender-name', function (req, res) {
      res.redirect('/application/ongoing-relationship')
  })
  // END__######################################################################################################
}
