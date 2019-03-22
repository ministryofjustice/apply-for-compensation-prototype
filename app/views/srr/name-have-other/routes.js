module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/srr/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/srr/date-of-birth')
    }
    res.redirect('/srr/other-names')
  })

  // Pass the question in to the page
  router.get('/srr/name-have-other/', function (req, res) {
    res.render('srr/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/srr/name-have-other/error', function (req, res) {
    res.render('srr/name-have-other/error', content)
  })
  // END__######################################################################################################
}
