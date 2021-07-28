module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Other medical treatment address
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/_7-treatment/hospital-details', function (req, res) {
    res.redirect('/application/_8-other-comp/context-prev-compensation')
  })

  // END__######################################################################################################
}
