const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/third-party-reps/prototype/_01-victim-details/address', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']


    // getting the inputs to be able to calculate if the user is a minor or not on the day of application
    var year = Number.parseInt(req.session.data['dob-year'], 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(req.session.data['dob-month'] - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(req.session.data['dob-day'], 10);

    var currentDate = moment(); //create a date that is 'just now ' so today
    var dateOfBirth = moment([year, month, day]); //create a date that is the DOB from the 3 elements we received on the date of birth page from the user)

    var duration = moment.duration(currentDate.diff(dateOfBirth));// calculate the difference between the two
    var ageInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

    if (directApplicant === 'Myself') {
      // Get the answer from the query string
      var confirmationPreference = req.session.data['confirmationPreference']

      if (confirmationPreference === 'Email') {
        // Redirect to the relevant page
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/phone-number')
      } else if (confirmationPreference === 'Text') {
        // If the variable is any other value (or is missing) render the page requested
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/email-address')
      }
    } else if ( (directApplicant === 'Someone else') && (ageInYears<18) ) {
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/context-main-applicant-details/minor')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/incapable-own-affairs')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/address/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/address/index', content)
  })

  // END__######################################################################################################
}
