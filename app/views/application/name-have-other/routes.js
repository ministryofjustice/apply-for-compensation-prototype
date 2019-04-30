module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/application/gender')
    }
    res.redirect('/application/name-other')
  })

  // Pass the question in to the page
  router.get('/application/name-have-other/', function (req, res) {
    res.render('application/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/name-have-other/error', function (req, res) {
    res.render('application/name-have-other/error', content)
  })
  // END__######################################################################################################
}
