module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/confirmation-choice/address-manually', function (req, res) {
    res.redirect('/concepts/confirmation-choice/have-email-address')
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/address-manually/', function (req, res) {
    res.render('concepts/confirmation-choice/address-manually/index', content)
  })

  router.get('/concepts/confirmation-choice/address-manually/error-building-street-blank', function (req, res) {
    res.render('concepts/confirmation-choice/address-manually/error-building-street-blank', content)
  })

  router.get('/concepts/confirmation-choice/address-manually/error-town-city-blank', function (req, res) {
    res.render('concepts/confirmation-choice/address-manually/error-town-city-blank', content)
  })

  router.get('/concepts/confirmation-choice/address-manually/error-postcode', function (req, res) {
    res.render('concepts/confirmation-choice/address-manually/error-postcode', content)
  })
  // END__######################################################################################################
}
