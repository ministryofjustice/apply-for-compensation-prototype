module.exports = function (router, content) {
  // START__####################################################################################################
  // File: responsibility-who-with
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/adult', function (req, res) {

    var repType = req.session.data['rep-type']
    var haveAuthority = req.session.data['haveAuthority'];

    // if they say are NOT a local authority, ask the supervision/care order questions
    if (repType !== 'Local authority'){
      res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order')
      // they are the parent or have authority for victim, skip reps section
    } else if ((repType === 'Parent') || (haveAuthority === 'Yes')) {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
      // otherwise, take their details as the rep
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/adult/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/adult/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/adult/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/responsibility-who-with/adult/error', content)
  })
  // END__######################################################################################################
}
