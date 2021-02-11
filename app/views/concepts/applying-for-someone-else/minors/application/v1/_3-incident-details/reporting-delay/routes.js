const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../../../../../helpers/date');
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay', function (req, res) {



    // If the variable is any other value (or is missing) render the page requesteds
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/do-you-know-offender-name')

    req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
    // else we're under 2 years
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
    }
   res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-location')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/error-checkboxes', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when text field is left empty
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/error-explain', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/error-explain', content)
  })
  // END__######################################################################################################
}
