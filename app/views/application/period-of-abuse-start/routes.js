module.exports = function (router) {
  // START__####################################################################################################
  // File: period-of-abuse-start
  //
  router.post('/application/period-of-abuse-start', function (req, res) {
    res.redirect('/application/period-of-abuse-end')
  })
  // END__######################################################################################################
}
