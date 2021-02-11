module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other', function (req, res) {
    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth')
    }
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other/error', content)
  })
  // END__######################################################################################################
}
