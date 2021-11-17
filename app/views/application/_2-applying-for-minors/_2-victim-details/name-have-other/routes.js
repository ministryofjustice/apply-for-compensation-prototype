module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/application/_2-applying-for-minors/_2-victim-details/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/application/_2-applying-for-minors/_2-victim-details/date-of-birth')
    }
    res.redirect('/application/_2-applying-for-minors/_2-victim-details/name-other')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-victim-details/name-have-other/', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-victim-details/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_2-victim-details/name-have-other/error', function (req, res) {
    res.render('application/_2-applying-for-minors/_2-victim-details/name-have-other/error', content)
  })
  // END__######################################################################################################
}
