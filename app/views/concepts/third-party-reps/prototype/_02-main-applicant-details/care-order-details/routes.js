module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details', function (req, res) {

    var repType = req.session.data['rep-type'];
    var haveAuthority = req.session.data['haveAuthority'];


    // if the person applying has authority or is the victim's parent, skip the rep details section
    if (repType === 'Parent' || haveAuthority === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
    } else {
      // otherwise, show the rep details section
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details/index', content)
  })

  router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details/error', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details/error', content)
  })

  // END__######################################################################################################
}
