module.exports = function (router) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/name-other', function (req, res) {
    res.redirect('/application/date-of-birth')
  })
  // END__######################################################################################################
}
