// module.exports = function (router, content) {
//   // START__####################################################################################################
//
//   router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context', function (req, res) {
//     res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-age')
//   })
//
//   // Pass the question in to the page
//   router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/', function (req, res) {
//     res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/index', content)
//   })
//   // END__######################################################################################################
// }



const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../../../../../helpers/date');
module.exports = function (router, content) {

  // START__####################################################################################################
  // File: loe-context
  // Variables: dob-day, dob-month, dob-year

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context', function (req, res) {
    var dobDay = req.session.data['dob-day']
    var dobMonth = req.session.data['dob-month']
    var dobYear = req.session.data['dob-year']
    var dob = dateHelper.getDatefrom3inputs(dobDay, dobMonth, dobYear) //that's the dob date based on the 3 elements we received from the user
    var dateToday = new Date();
    var ageToday = moment.duration(dob.diff(dateToday)); // / calculate the difference between the two (that's in milliseconds or something)
    var ageInYears = Math.abs(ageToday.asYears()); // take that number in days  - we can do that thanks to the Moment library
    var workingAge = 16; //set working age

    console.log(dob);
    console.log(dateToday);
    console.log(ageInYears);

    if (ageInYears < workingAge){ //if age is over 16, return the following screen
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-education')
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
    }
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-working-age')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-past', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-past', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-format', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-format', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-incomplete', function (req, res) {
      res.render('concepts/applying-for-someone-else/minors/application/v1/_7-loss-of-earnings-special-expenses/loe-context/error-incomplete', content)
    })
  // END__######################################################################################################
}
