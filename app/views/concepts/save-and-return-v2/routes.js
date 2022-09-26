module.exports = function (router, content) {
  // START__####################################################################################################

/***** Eligibility *****/

  /* >>>>> Existing or new <<<<< */
  router.post('/concepts/save-and-return-v2/app/eligibility/existing-or-new', function (req, res) {
    var existingOrNew = req.session.data['existingOrNew']
    if (existingOrNew === 'update') {
      res.redirect('/concepts/save-and-return-v2/app/eligibility/transition')
    } else if (existingOrNew === 'continue') {
      res.redirect('/concepts/save-and-return-v2/app/return/')
    } else {
      res.redirect('/concepts/save-and-return-v2/app/eligibility/fatal-application')
    }
  })

  /* >>>>> Fatal application <<<<< */
  router.post('/concepts/save-and-return-v2/app/eligibility/fatal-application', function (req, res) {
    var fatalApplication = req.session.data['fatalApplication']
    if (fatalApplication === 'yes') {
      res.redirect('/concepts/end')
    } else {
      res.redirect('/concepts/save-and-return-v2/app/eligibility/incident-reported')
    }
  })

  /* >>>>> Over 18 <<<<< */
  router.post('/concepts/save-and-return-v2/app/eligibility/over-18-router', function (req, res) {
    var over18 = req.session.data['over18']
    if (over18 === 'no') {
      res.redirect('/concepts/end')
    } else {
      res.redirect('/concepts/save-and-return-v2/app/eligibility/british-citizen')
    }
  })


/***** Save *****/

  /* >>>>> Contact detail <<<<< */
  router.post('/concepts/save-and-return-v2/app/save/contact-router', function (req, res) {
    var contactDetail = req.session.data['contact']
    if (contactDetail == 'neither') {
      res.redirect('/concepts/save-and-return-v2/app/save/transition')
    } else {
      res.redirect('/concepts/save-and-return-v2/app/save/sent-message')
    }
  })

  /* >>>>> Authentication 1 <<<<< */
  router.post('/concepts/save-and-return-v2/app/save/auth-router', function (req, res) {
    var authCode = Number(req.session.data['auth-code'])
    var enterredCode = Number(req.session.data.otp)
    if (enterredCode == authCode) {
      res.redirect('/concepts/save-and-return-v2/app/save/victim-name')
    } else {
      res.render('concepts/save-and-return-v2/app/save/authentication', {'error': true })
    }
  })


/***** Victim *****/

  /* >>>>> Other name <<<<< */
  router.post('/concepts/save-and-return-v2/app/victim/other-name', function (req, res) {
    var otherName = req.session.data['otherName']
    if (otherName === 'yes') {
      res.redirect('/concepts/save-and-return-v2/app/victim/what-name')
    } else {
      res.redirect('/concepts/save-and-return-v2/app/victim/address')
    }
  })


/***** Return *****/

  /* >>>>> Sign in <<<<< */
  router.post('/concepts/save-and-return-v2/app/return/router', function (req, res) {
    // Enterred info
    var email = req.session.data['email-address'];
    var mobNo = req.session.data['mobile-number'];
    var victimFirst = req.session.data['victim-first-name'];
    var victimLast = req.session.data['victim-last-name'];
    var dobDay = req.session.data['dob-day'];
    var dobMonth = req.session.data['dob-Month'];
    var dobYear = req.session.data['dob-Year'];
    // Return info
    var returnContact = req.session.data['return-contact'];
    var returnName = req.session.data['return-name'];
    var returnDobDay = req.session.data['return-dob-day'];
    var returnDobMonth = req.session.data['return-dob-Month'];
    var returnDobYear = req.session.data['return-dob-Year'];
    // Format inputs
    if (victimFirst && victimLast) {
      var victimName = victimFirst.concat(victimLast);
      victimName = victimName.toUpperCase();
      victimName = victimName.replace(/\s/g, '');
    }
    if (returnName){
      var returnName = returnName.toUpperCase();
      returnName = returnName.replace(/\s/g, '');
    }
    if ( (dobDay && dobMonth) && dobYear) {
      var dob = dobYear.concat(dobMonth,dobDay);
      dob = dob.replace(/\s/g, '');
    }
    if ( (returnDobDay && returnDobMonth) && returnDobYear) {
      var returnDob = returnDobYear.concat(returnDobMonth,returnDobDay);
      returnDob = returnDob.replace(/\s/g, '');
    }

    if (returnContact == false && returnName == false && returnDobDay == false) {
      res.redirect('/concepts/save-and-return-v2/app/return/sent-message');
      return;
    }

    if ( returnContact == email || returnContact == mobNo ) {

      if ( returnName == victimName ) {

        if (returnDob === dob) {
          res.redirect('/concepts/save-and-return-v2/app/return/sent-message');
        } else {
          res.redirect('/concepts/save-and-return-v2/app/return/not-found');
        }
        
      } else {
        res.redirect('/concepts/save-and-return-v2/app/return/not-found');
      }

    } else {
      res.redirect('/concepts/save-and-return-v2/app/return/not-found');
    }
  })


  /* >>>>> Authentication 2 <<<<< */
  router.post('/concepts/save-and-return-v2/app/return/auth-router', function (req, res) {
    var authCode = Number(req.session.data['auth-code'])
    var enterredCode = Number(req.session.data.otp)
    if (enterredCode == authCode) {
      res.redirect('/concepts/save-and-return-v2/app/return/context')
    } else {
      res.render('concepts/save-and-return-v2/app/return/authentication', {'error': true })
    }
  })


  // END__######################################################################################################
}