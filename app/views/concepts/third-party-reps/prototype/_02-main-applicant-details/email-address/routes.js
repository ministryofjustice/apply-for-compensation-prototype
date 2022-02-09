const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates

module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address', function (req, res) {

        if (!req.session.data['mainAppEmailAddress']) {
          req.session.data['mainAppEmailAddress'] = 'name@domain.com'
        }

          res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/do-you-share-responsibility')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/email-address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/email-address/index', content)
  })
  // END__######################################################################################################
}
