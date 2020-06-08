module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/other-injuries', function (req, res) {
  // Get the answer from the query string
  var haveOtherInjuries = req.session.data['haveOtherInjuries']
  let paralysisType = req.session.data['paralysisType'] || []
  let infectionType = req.session.data['infectionType'] || []
  var pregnancyLoss = req.session.data['pregnancyLoss']

  if (haveOtherInjuries === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts')
  } else if( paralysisType !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries')
  } else if( infectionType !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries')
  } else if (pregnancyLoss === 'Yes') {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries')
  } else {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/context-about-dmi')
  }
})

// END__######################################################################################################
}
