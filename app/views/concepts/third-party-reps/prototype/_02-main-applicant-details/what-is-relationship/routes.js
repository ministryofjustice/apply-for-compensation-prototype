module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship', function (req, res) {

    var over18 = req.session.data['over18'];
    var haveAuthority = req.session.data['haveAuthority'];

    if (over18 === 'No') {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility')
    } else if (haveAuthority === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
