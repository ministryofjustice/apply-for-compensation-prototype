const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details', function (req, res) {

    var over18 = req.session.data['over18'];

      if (over18 === 'No') {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/are-you-their-parent')
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/authority-do-you-have')
      }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/index', content)
  })
  // END__######################################################################################################
}
