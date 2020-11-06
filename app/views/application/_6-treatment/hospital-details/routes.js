module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/_6-treatment/hospital-details', function (req, res) {
    res.redirect('/application/_7-financial-losses/context-your-money/')
  })

  // END__######################################################################################################
}
