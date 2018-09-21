module.exports = function (router) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'no')  {
      return res.redirect('/application/date-of-birth')
    }
    res.redirect('/application/name-other')
  })
  // END__######################################################################################################
}
