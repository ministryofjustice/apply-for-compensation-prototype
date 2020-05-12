module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck', function (req, res) {

    let headNeckFaceDetail = req.session.data['headNeckFaceDetail'] || []

    // If they pick apple or banana then show them the success page
    if (headNeckFaceDetail.includes('Neck injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck')
    } else if (headNeckFaceDetail.includes('Nose injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose')
    } else if (headNeckFaceDetail.includes('Skull injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/skull')
    } else if (headNeckFaceDetail.includes('Tongue injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue')
    } else if (headNeckFaceDetail.includes('Teeth injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/end-physical-injuries/')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck/index', content)
  })
  // END__######################################################################################################
}
