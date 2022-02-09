module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have', function (req, res) {

    var haveAuthority = req.session.data['haveAuthority'];
    if (haveAuthority === 'Yes')  {
      return res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-you')
    }
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/index', content)
  })
  // END__######################################################################################################
}
