module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/_2-applying-for-minors/_7-treatment/hospital-details', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_8-other-comp/context-prev-compensation')
  })

  // END__######################################################################################################
}
