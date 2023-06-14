const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: date-of-birth/they
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']
    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/address/they')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/they/transition', content)
  })

// END__######################################################################################################
}
