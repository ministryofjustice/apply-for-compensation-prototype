module.exports = function (router) {
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

  // Add content key/value pairs here
  // Content variables are isted in the same order as folders when sorted a-z
  // If a variable has been defined in a previous file it is not defined again
  // Comments sepperate the list
  // This list should be moved in to it's own file in the future
  const content = {
    // Postcode lookup
    addressQuestion:'Enter your address',
    postcodeLabel:'Postcode',
    // Manual address entry
    addressQuestion:'Enter your address',
    addressLine1Label: 'Building and street <span class="govuk-visually-hidden">line 1 of 2</span>',
    addressLine2Label: '<span class="govuk-visually-hidden">Building and street line 2 of 2</span>',
    townOrCityLabel: 'Town or city',
    countyLabel: 'County (optional)',
    postcodeOptionalLabel: 'Postcode (optional)',
    // Non uk address
    addressQuestion:'Enter your address',
    // After 1979
    after1979Question: 'Did the crime happen on or after 1st October 1979?',
    // Application delay
    whyDelayQuestion: 'Why did you not apply to us for compensation sooner?',
    // British citizen
    britishCitizenQuestion: 'Are you a British citizen?',
    // Compensation
    otherCompensationQuestion: 'Have you applied for any other compensation for this crime?',
    otherCompensationHint: 'Other compensation can include, for example, insurance, civil damages and court compensation.',
    // Compensation amount
    howMuchCompensationQuestion: 'How much compensation did you get?',
    howMuchCompensationHint: 'You can also tell us if you are still waiting to find out.',
    // Who have you applied to for compensation
    whoCompensationQuestion: 'Who else have you applied to for compensation?',
    // Compensation why not
    compensationWhyNotQuestion: "Why did you not apply for compensation from another source?",
    // Crime reference number
    crimeReferenceNumberQuestion: 'What\'s the crime reference number?',
    crimeReferenceNumberHint: 'For example, 31 3 2018. You can enter an approximate date',
    // Crime reporting date
    crimeReportedDateQuestion: 'When was the crime reported to police?',
    crimeReportedDateHint: 'For example, 31 3 2018. You can enter an approximate date',
  };

  // Pass the question in to the page
  router.get('/application/crime-reported-date/', function (req, res) {
    res.render('application/crime-reported-date/index', content)
  })
  // END__######################################################################################################
}
