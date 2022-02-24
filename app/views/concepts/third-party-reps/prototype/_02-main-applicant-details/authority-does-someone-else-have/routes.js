const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-does-someone-else-have
  // Variable: haveAuthoritySomebodyElse
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have', function (req, res) {

    var haveAuthoritySomebodyElse = req.session.data['haveAuthoritySomebodyElse'];

    if (haveAuthoritySomebodyElse === 'Yes')  {
      return res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-someone-else')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-to-apply-someone-else-future')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/authority-does-someone-else-have/index', content)
  })
  // END__######################################################################################################
}
