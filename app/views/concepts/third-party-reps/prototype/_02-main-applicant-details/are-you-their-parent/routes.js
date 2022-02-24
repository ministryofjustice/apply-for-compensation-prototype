module.exports = function (router, content) {
  // START__####################################################################################################
  // File: are-you-their-parent
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent', function (req, res) {

    var parent = req.session.data['parent'];
    if (parent === 'Yes')  {
      return res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-you')
    }
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have')

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent/index', content)
  })
  // END__######################################################################################################
}
