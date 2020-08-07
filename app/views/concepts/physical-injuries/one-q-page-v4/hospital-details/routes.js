module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/physical-injuries/one-q-page-v4/hospital-details', function (req, res) {



    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveDMI = req.session.data['dmiDoYouHave']

      if ((havePhysicalInjuries === 'No') && (haveDMI === 'Yes')) {
        res.redirect('/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types/')
      } else {
        res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details/')
      }

  })

  // END__######################################################################################################
}
