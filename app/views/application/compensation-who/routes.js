module.exports = function (router) {
  // START__####################################################################################################
  // File: compensation-who
  //
  router.post('/application/compensation-who', function (req, res) {
      res.redirect('/application/compensation-amount')
  })
  // END__######################################################################################################
}
