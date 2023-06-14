const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: date-of-birth/you
  //
  router.post('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you', function (req, res) {

    var directApplicant = req.session.data['direct-applicant']

    if (directApplicant === 'Myself') {
      // getting the inputs to be able to calculate if the user is a minor or not on the day of application
      var year = Number.parseInt(req.session.data['dob-year'], 10); // making sure with have a well formated number for year, month and day
      var month = Number.parseInt(req.session.data['dob-month'] - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
      var day = Number.parseInt(req.session.data['dob-day'], 10);

      var currentDate = moment(); //create a date that is 'just now ' so today
      var dateOfBirth = moment([year, month, day]); //create a date that is the DOB from the 3 elements we received on the date of birth page from the user)

      var duration = moment.duration(currentDate.diff(dateOfBirth));// calculate the difference between the two
      var ageInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

      if(ageInYears < 18) { // it's a minor
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/transition')
        // @todo we need to build a page that explains to users that they can only use this service if they are over 18
      } else {
        res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/address/you')
      }
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_01-victim-details/address/you')
    }


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/transition', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_01-victim-details/date-of-birth/you/transition', content)
  })

// END__######################################################################################################
}
