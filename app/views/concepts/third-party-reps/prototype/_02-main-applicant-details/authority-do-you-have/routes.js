const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-have-other
  // Variable: haveOtherName
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have', function (req, res) {

    var haveAuthority = req.session.data['haveAuthority'];
    var over18 = req.session.data['over18'];


    if (haveAuthority === 'Yes')  {
        return res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-you')
      } else {
        if (over18 === 'No') {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-someone-else')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have/index', content)
  })
  // END__######################################################################################################
}
