const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates

// START__Helpers functions ####################################################################################################################################

// the functions below will help get the date we need to cover the over 2 years delay for applying and the over 48h delay for reporting

function getDatefrom3inputs(inputDay, inputMonth, inputYear) {
    // using the 3 variables above to create a date object with moment
    var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(inputDay, 10); 
    var date = moment([year, month, day]); //create a date from the 3 elements we received from the user
    return date
}

function getDatefrom2inputs(inputMonth, inputYear) {
  // using the 2 variables above to create a date object with moment which will be the last day of the month
  var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
  var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1 
  var date = moment([year, month]).endOf('month'); //create a date from the 2 elements we received from the user which is the last day of the month
  return date
}

function isReportedOver48h(incident, report) {
  var delay = moment.duration(report.diff(incident)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInDays = delay.asDays(); // take that number in days  - we can do that thanks to the Moment library
  return (delayInDays > 2) //reported more than 48h = 2 days after the incident
}

// END__#############################################################################################################################################################
// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// START__####################################################################################################
// File: stepped-guide
// Variable: step

router.get('/stepped-guide', function (req, res) {
	var step = req.query.step;
	return res.render('stepped-guide', { step: step});
})

// END__######################################################################################################

// START__####################################################################################################
// File: who-is-making-the-application
// Variable: rep

router.post('/application/who-is-making-the-application', function (req, res) {
  // Get the answer from the query string
  var rep = req.session.data['rep']

  if (rep === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/declaration')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: declaration
// Variable: declaration

router.post('/application/declaration', function (req, res) {
  // Get the answer from the query string
  var declaration = req.session.data['declaration']
  //setting the session variable for check your answer page to false
  req.session.checking_answers = false

 // if (declaration === 'no') {
    // Redirect to the relevant page
    //res.redirect('/application/prototype')
  //} else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/what-are-you-applying-for')
  //}
})

// END__######################################################################################################

// START__####################################################################################################
// File: what-are-you-applying-for
// variable: what-type-of-application-would-you-like-to-make?

router.post('/application/what-are-you-applying-for', function (req, res) {
  // Get the answer from the query string
  var applicationType = req.session.data['what-type-of-application-would-you-like-to-make?'];
  if (applicationType === 'physical-injury') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/OCJ-service-option')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: OCJ-service-option
// variable: service-option

router.post('/application/OCJ-service-option', function (req, res) {
  // Get the answer from the query string
  var serviceOption = req.session.data['service-option']

  if (serviceOption === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/compensation')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: compensation
// Variable: otherCompensation

router.post('/application/compensation', function (req, res) {

  // Get the answer from the query string
    var otherCompensation = req.session.data['otherCompensation']
    if (otherCompensation === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/compensation-why-not')
    } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/compensation-who')
    }

})
// END__######################################################################################################

// START__####################################################################################################
// File: did-not-apply-for-compensation - not used anymore (see above commented)
//

router.post('/application/compensation-why-not', function (req, res) {

  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
    res.redirect('/application/british-citizen')

})
// END__######################################################################################################

// START__####################################################################################################
// File: who-apply-to-for-compensation
//

router.post('/application/compensation-who', function (req, res) {
    res.redirect('/application/compensation-amount')

})
// END__######################################################################################################

// START__####################################################################################################
// File: how-much-compensation
//

router.post('/application/compensation-amount', function (req, res) {

  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
    res.redirect('/application/british-citizen')

})
// END__######################################################################################################

// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/residence-1')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/criminal-convictions')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: residence-1
// Variable: ordinarily-resident

router.post('/application/residence-1', function (req, res) {
  // Get the answer from the query string
  var ordinarilyResident = req.session.data['ordinarily-resident']

  if (ordinarilyResident === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/prototype')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/criminal-convictions')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: criminal-convictions
// Variable: criminalConvictions

router.post('/application/criminal-convictions', function (req, res) {
  // Get the answer from the query string
  var criminalConvictions = req.session.data['criminalConvictions']

  if (criminalConvictions === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/tell-criminal-convictions')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/name')
  }
})

// END__######################################################################################################

// START__####################################################################################################
// File: tell-criminal-convictions
// this view is called if user says yes to convicted of a criminal offence

router.post('/application/tell-criminal-convictions', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/name')
})

// END__######################################################################################################

// START__####################################################################################################
// File: name
//
router.post('/application/name', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/name-have-other')
})
// END__######################################################################################################

// START__####################################################################################################
// File: name-have-other
// Variable: haveOtherName

router.post('/application/name-have-other', function (req, res) {

  var haveOtherName = req.session.data['haveOtherName'];

  if (haveOtherName === 'no')  {
    return res.redirect('/application/date-of-birth')
  }

  res.redirect('/application/name-other')

})

// END__######################################################################################################

// START__####################################################################################################
// File: name=other
//
router.post('/application/name-other', function (req, res) {
  res.redirect('/application/date-of-birth')
})
// END__######################################################################################################

// START__####################################################################################################
// File: date-of-birth
//
router.post('/application/date-of-birth', function (req, res) {
  // getting the inputs to be able to calculate if the user is a minor or not on the day of application
  var year = Number.parseInt(req.session.data['dob-year'], 10); // making sure with have a well formated number for year, month and day
  var month = Number.parseInt(req.session.data['dob-month'] - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
  var day = Number.parseInt(req.session.data['dob-day'], 10);

  var currentDate = moment(); //create a date that is 'just now ' so today
  var dateOfBirth = moment([year, month, day]); //create a date that is the DOB from the 3 elements we received on the date of birth page from the user)

  var duration = moment.duration(currentDate.diff(dateOfBirth));// calculate the difference between the two
  var ageInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

  if(ageInYears < 18) { // it's a minor 
    return res.redirect('/application/prototype')
  }
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/email-address')
})
// END__######################################################################################################

// START__####################################################################################################
// File: email-address
// varialbe: email-address
// if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
router.post('/application/email-address', function (req, res) {
  if (!req.session.data['emailAddress']) {
    req.session.data['emailAddress'] = 'name@domain.com'
  }
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/address')
})
// END__######################################################################################################

// START__####################################################################################################
// File: address
// this is the first step of getting an address - from here either the user select 'Find UK address' and goes to the view 'find-uk-address' 
// or uses the link in the reveal to enter the address manually and goes to the view 'address-manually'
router.post('/application/address', function (req, res) {
  res.redirect('/application/find-uk-address')
})
// END__######################################################################################################

// START__####################################################################################################
// File: find-uk-address 
// will produce an address on one line one the 'check your answers page'
router.post('/application/find-uk-address', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/phone-number')
})
// END__######################################################################################################

// START__####################################################################################################
// File: address-manually
// will produce an address on multiple line on the 'check your answers page'
router.post('/application/address-manually', function (req, res) {
  req.session.data['address-lookup-result'] = null; // this line is here to clear the data if the user had used the postcode look-up initially as we don't want to have duplicated data in the end
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/phone-number')
})
// END__######################################################################################################

// START__####################################################################################################
// File: phone-number
//
router.post('/application/phone-number', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/single-or-multiple-incidents')
})
// END__######################################################################################################

// START__####################################################################################################
// File: single-or-multiple-incidents
// Variable: single-or-multiple-incidents

router.post('/application/single-or-multiple-incidents', function (req, res) {
  // Get the answer from the query string
  var singleOrMultipleIncidents = req.session.data['single-or-multiple-incidents']

  if (singleOrMultipleIncidents === 'It happened over a period of time') {
    // Redirect to the relevant page
    req.session.data['incident-date-day'] = null; // this line is here to clear the data if the user had chosen a single incident initially because I use that session as a test in the code for POST crime-reported-date

    res.redirect('/application/period-of-abuse-start')
  } else {
    req.session.data['period-of-abuse-end-month'] = null; // this line is here to clear the data if the user had chosen a period of abuse initially because I use that session as a test in the code for POST crime-reported-date
    // else we're under 2 days
    res.redirect('/application/incident-date')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: period-of-abuse-start
//
router.post('/application/period-of-abuse-start', function (req, res) {
  res.redirect('/application/period-of-abuse-end')
})
// END__######################################################################################################

// START__####################################################################################################
// File: period-of-abuse-end
//
router.post('/application/period-of-abuse-end', function (req, res) {
  var POAEndMonth = req.session.data['period-of-abuse-end-month'] 
  var POAEndYear = req.session.data['period-of-abuse-end-year']
  // now I'm using the 2 variables above to create a date object with moment to check if they delayed applying over 2 years
  var year = Number.parseInt(POAEndYear, 10); // making sure with have a well formated number for year and month
  var month = Number.parseInt(POAEndMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract
  var currentDate = moment().endOf('month'); // this line of code make sure that the date is using the last day of the current month
  var deadlineDate = moment(currentDate).subtract(2, 'year'); // this is two years ago, the end date will be compared to that deadline
  var dateOfEndOfPOA = moment([year, month]).endOf('month'); //create a date that is the end of the period of abuse from the 2 elements we received from the user (+making it the last day of that month)

  if (dateOfEndOfPOA < deadlineDate){ //apply more than 2 years after the end of the period of abuse
    return res.redirect('/application/application-delay')
  }
  req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
  // else we're under 2 years

  if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
  var reportingDateDay = req.session.data['incidentReported-day'] 
  var reportingDateMonth = req.session.data['incidentReported-month']
  var reportingDateYear = req.session.data['incidentReported-year']
  var reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
  var POAEndMonth = req.session.data['period-of-abuse-end-month'] 
  var POAEndYear = req.session.data['period-of-abuse-end-year']
  var endofPeriodOfAbuseDate = getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h 
  if ( isReportedOver48h(endofPeriodOfAbuseDate, reportingDate)){ // changing the end of period of abuse date is now triggering the reporting delay screen
    return res.redirect('/application/reporting-delay')
  }
}
req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
// else we're under 2 days

  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/incident-location')
})
// END__######################################################################################################

// START__####################################################################################################
// File: incident-date
// Variables: incident-date-day, incident-date-month, incident-date-year

router.post('/application/incident-date', function (req, res) {
  // first I'm getting the data, this will be used to check if the date is 01/01/2017 which is the trigger to mock linked cases / previous applications
  var incidentDateDay = req.session.data['incident-date-day'] 
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']
  var  incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
  // get today's date   and compare it to the date of incident
  var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
  var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

  if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
    var reportingDateDay = req.session.data['incidentReported-day'] 
    var reportingDateMonth = req.session.data['incidentReported-month']
    var reportingDateYear = req.session.data['incidentReported-year']
    var reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h 
    if ( isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
      return res.redirect('/application/reporting-delay')
    }
  }
  req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page

  if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) { // mocking linked cases by checking against a set trigger date = 01/01/2017
    // Redirect to the relevant page
    res.redirect('/application/previous-applications')
  } else {
        if (delayInYears > 2){ //apply more than 2 years after the incident
          return res.redirect('/application/application-delay')
        }
        req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
        // else we're under 2 years
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/check-your-answers-page')
        }
        res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: previous-applications
// Variable: previous-applications

router.post('/application/previous-applications', function (req, res) {
  // Get the answer from the query string
  var previousApplications = req.session.data['previous-applications']

  if (previousApplications === 'yes')  {
    // Redirect to the relevant page
    res.redirect('/application/previous-not-eligible')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: application-delay
// we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
//logic for it is for incident-date and period-of-abuse-end

router.post('/application/application-delay', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/incident-location')
})
// END__######################################################################################################

// START__####################################################################################################
// File: incident-location
//
router.post('/application/incident-location', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/incident-reported')
})

// END__######################################################################################################

// START__####################################################################################################
// File: incident-reported
// Variable: incidentReported
 router.post('/application/incident-reported', function (req, res) {
   // Get the answer from the query string
  var crimeReported = req.session.data['crimeReported']   
   if (crimeReported === 'no') {
     // Redirect to the relevant page
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
     res.redirect('/application/do-you-know-offender')
   } else {
     // If the variable is any other value (or is missing) render the page requested
     res.redirect('/application/crime-reported-date')
   }
 })

// END__######################################################################################################

// START__####################################################################################################
// File: crime-reported-date
//
router.post('/application/crime-reported-date', function (req, res) {
  // all the functions used here are defined higher up in the code (near the start)
  var reportingDate
  var incidentDate

  if (req.session.data['incident-date-day']) { // this is a single incident and we have the data for the date (day, month and year)
    var incidentDateDay = req.session.data['incident-date-day'] 
    var incidentDateMonth = req.session.data['incident-date-month']
    var incidentDateYear = req.session.data['incident-date-year']
    incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h 
    }
     else { if (req.session.data['period-of-abuse-end-month']){ // this is a period of abuse and we have the data for the end date (month and year)
      var POAEndMonth = req.session.data['period-of-abuse-end-month'] 
      var POAEndYear = req.session.data['period-of-abuse-end-year']
      incidentDate = getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h 
      } else {
        incidentDate = false
      }
    }
    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported
      var reportingDateDay = req.session.data['incidentReported-day'] 
      var reportingDateMonth = req.session.data['incidentReported-month']
      var reportingDateYear = req.session.data['incidentReported-year']
      reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    } else {
      reportingDate = false
    }
  
  if (incidentDate && reportingDate && isReportedOver48h(incidentDate, reportingDate)){ 
    return res.redirect('/application/reporting-delay')
  }
  req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
  // else we're under 2 days

  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/reporting-details-what-force')
})
// END__######################################################################################################

// START__####################################################################################################
// File: reporting-delay
//
router.post('/application/reporting-delay', function (req, res) {
  res.redirect('/application/reporting-details-what-force')
})
// END__######################################################################################################

// START__####################################################################################################
// File: reporting-details-what-force
//
router.post('/application/reporting-details-what-force', function (req, res) {
  res.redirect('/application/reporting-details-police-officer')
})
// END__######################################################################################################

// START__####################################################################################################
// File: reporting-details-police-officer
//
router.post('/application/reporting-details-police-officer', function (req, res) {
  res.redirect('/application/crime-reference')
})
// END__######################################################################################################

// START__####################################################################################################
// File: crime-reference
//
router.post('/application/crime-reference', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/do-you-know-offender')
})
// END__######################################################################################################

// START__####################################################################################################
// File: do-you-know-offender
// Variable: know-offender

router.post('/application/do-you-know-offender', function (req, res) {
  // Get the answer from the query string
  var knowOffender = req.session.data['know-offender']

  if (knowOffender === 'no')  {
    // Redirect to the relevant page
    res.redirect('/application/additional-info')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/offender-name')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: offender-name

router.post('/application/offender-name', function (req, res) {
    res.redirect('/application/living-with-offender-before')
})
// END__######################################################################################################

// START__####################################################################################################
// File: living-with-offender-before
// Variable: living-with-offender-before

router.post('/application/living-with-offender-before', function (req, res) {
  // Get the answer from the query string
  var withOffenderBefore = req.session.data['living-with-offender-before']

  if (withOffenderBefore === 'no')  {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // Redirect to the relevant page
    res.redirect('/application/ongoing-relationship')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/living-with-offender-now')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: living-with-offender-now
// Variable: living-with-offender-now

router.post('/application/living-with-offender-now', function (req, res) {
  // Get the answer from the query string
  var withOffenderNow = req.session.data['living-with-offender-now']

  if (withOffenderNow === 'no')  {
    // Redirect to the relevant page
    res.redirect('/application/ongoing-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/prototype')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: ongoing-relationship
// Variable: ongoing-relationship

router.post('/application/ongoing-relationship', function (req, res) {
  // Get the answer from the query string
  var ongoingRelationship = req.session.data['ongoing-relationship']

  if (ongoingRelationship === 'yes')  {
    // Redirect to the relevant page
    res.redirect('/application/what-is-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/additional-info')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: additional-info

router.post('/application/additional-info', function (req, res) {

  res.redirect('/application/check-your-answers-page')
})
// END__######################################################################################################


// START__####################################################################################################
// File: check-your-answers-page
// Variable: checking_answers is a session variable to know if we go back to this page or not when a user press 'continue' on some question pages

 router.get('/application/check-your-answers-page', function (req, res) {
   // Get the answer from the query string
   req.session.checking_answers = true // this is initially set to false on the declaration page to avoid false results if using the prototype more than once
   return res.render('application/check-your-answers-page')
 })

// END__######################################################################################################

// START__####################################################################################################
// File: what-is-relationship
//
router.post('/application/what-is-relationship', function (req, res) {
  res.redirect('/application/additional-info')
})
// END__######################################################################################################

// START__####################################################################################################
// File: confirmation-page-if-automatic-nil
// variable: apply-for-review

router.post('/application/confirmation-page-if-automatic-nil', function (req, res) {
  // Get the answer from the query string
  var applyForReview = req.session.data['apply-for-review']

  if (applyForReview  === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/confirmation-of-review')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/prototype')
  }
})

// END__######################################################################################################

module.exports = router
