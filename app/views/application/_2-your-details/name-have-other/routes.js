module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/_2-your-details/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/application/_2-your-details/date-of-birth')
    }
    res.redirect('/application/_2-your-details/name-other')
  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/name-have-other/', function (req, res) {
    res.render('application/_2-your-details/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_2-your-details/name-have-other/error', function (req, res) {
    res.render('application/_2-your-details/name-have-other/error', content)
  })
  // END__######################################################################################################
}
