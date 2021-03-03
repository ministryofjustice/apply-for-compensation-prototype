module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/end/')
  })

  // END__######################################################################################################
}
