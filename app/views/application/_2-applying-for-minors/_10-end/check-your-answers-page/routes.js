const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../../helpers/date');


module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/application/_2-applying-for-minors/_10-end/check-your-answers-page', function (req, res) {
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
       return res.redirect('/application/_2-applying-for-minors/_10-end/check-your-answers-page')
     }

     var ageToCheck = 12;

     var dobDay = req.session.data['dob-day']
     var dobMonth = req.session.data['dob-month']
     var dobYear = req.session.data['dob-year']
     var dob = dateHelper.getDatefrom3inputs(dobDay, dobMonth, dobYear)

     var today = new Date();
     var duration = moment.duration(dob.diff(today)); // / calculate the difference between the two (that's in milliseconds or something)
     var ageAtApplication = duration.asDays(); // take that number in days  - we can do that thanks to the Moment library

     console.log(ageAtApplication);

     if (ageAtApplication > (-365 * ageToCheck)){ //if age at application is the target age or under
       return res.redirect('/application/_2-applying-for-minors/_10-end/declaration-under-12')
     } else {
       res.redirect('/application/_2-applying-for-minors/_10-end/declaration')
     }
   })

   // Pass the question in to the page
   router.get('/application/_2-applying-for-minors/_10-end/check-your-answers-page/', function (req, res) {
     res.render('application/_2-applying-for-minors/_10-end/check-your-answers-page/index', content)
   })

   // Pass the question in to the page
   router.get('/application/_2-applying-for-minors/_10-end/check-your-answers-page/', function (req, res) {
     res.render('application/_2-applying-for-minors/_10-end/check-your-answers-page/cya', content)
   })
  // END__######################################################################################################
}
