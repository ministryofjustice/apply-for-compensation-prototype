module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incapable-own-affairs
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs', function (req, res) {

    var incapableOwnAffairs = req.session.data['incapableOwnAffairs'];
    if (incapableOwnAffairs === 'Yes')  {
      return res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details')
    }
    res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs/index', content)
  })
  // END__######################################################################################################
}
