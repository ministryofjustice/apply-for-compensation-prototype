module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/other-injuries', function (req, res) {
  // Get the answer from the query string
  var haveOtherInjuries = req.session.data['haveOtherInjuries']
  let softTissueInjuries = req.session.data['softTissueInjuries'] || []
  var haveParalysis = req.session.data['haveParalysis'] || []
  let paralysisType = req.session.data['paralysisType'] || []
  var haveInfection = req.session.data['haveInfection'] || []
  let infectionType = req.session.data['infectionType'] || []
  var pregnancyLoss = req.session.data['pregnancyLoss']

  if (haveOtherInjuries === 'Yes') {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts')
  } else if (haveOtherInjuries === 'No') {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment')
  } else if (softTissueInjuries.includes('none') && (haveParalysis === 'No') && (haveInfection === 'No') && (pregnancyLoss === 'No') && (haveOtherInjuries === 'No') ) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment')
  } else if( paralysisType !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts')
  } else if( infectionType !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts')
  } else if (pregnancyLoss === 'Yes') {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts')
  }
})
// END__######################################################################################################
}
