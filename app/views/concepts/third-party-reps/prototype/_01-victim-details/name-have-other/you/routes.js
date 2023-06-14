module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/name-have-other/you', function (req, res) {

    var haveOtherName = req.session.data['haveOtherName'];
    if (haveOtherName === 'No')  {
      return res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you')
    }
    res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/name-other/you')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/name-have-other/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/name-have-other/you/index', content)
  })
  // END__######################################################################################################
}
