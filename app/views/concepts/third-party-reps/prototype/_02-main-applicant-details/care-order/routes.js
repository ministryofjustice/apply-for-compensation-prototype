module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order', function (req, res) {

  var careOrder = req.session.data['care-order'];
  var parent = req.session.data['parent'];
  var haveAuthority = req.session.data['haveAuthority'];

  // if there is a care order, ask for details of it
  if (careOrder === 'Yes') {
    res.redirect('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order-details')
  } else {
    // if the person applying has authority or is the victim's parent, skip the rep details section
    if (parent === 'Yes' || haveAuthority === 'Yes') {
      res.redirect('/concepts/third-party-reps/prototype/_04-incident-details/context-incident-details')
    } else {
      // otherwise, show the rep details section
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/context-rep-details')
    }
  }
})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_02-main-applicant-details/care-order/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_02-main-applicant-details/care-order/index', content)
})


// END__######################################################################################################
}
