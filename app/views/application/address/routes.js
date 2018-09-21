module.exports = function (router) {
  // START__####################################################################################################
  // File: address
  // this is the first step of getting an address - from here either the user select 'Find UK address' and goes to the view 'find-uk-address'
  // or uses the link in the reveal to enter the address manually and goes to the view 'address-manually'
  // or  uses the link in the reveal to enter an on uk address and goes to the view 'address-non-UK'
  router.post('/application/address', function (req, res) {
    res.redirect('/application/find-uk-address')
  })
  // END__######################################################################################################
}
