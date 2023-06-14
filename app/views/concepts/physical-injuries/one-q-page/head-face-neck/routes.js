module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck', function (req, res) {
    let headNeckFaceArea = req.session.data['headNeckFaceArea'] || []

    // If they pick apple or banana then show them the success page
      if (headNeckFaceArea.includes('Head or brain')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/head-brain')
    } else if (headNeckFaceArea.includes('Neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck')
    } else if (headNeckFaceArea.includes('Ear or hearing')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing')
    } else if (headNeckFaceArea.includes('Eye or eyesight')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight')
    } else if (headNeckFaceArea.includes('Face')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/face')
    } else if (headNeckFaceArea.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose')
    } else if (headNeckFaceArea.includes('Teeth')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth')
    } else if (headNeckFaceArea.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/head-surface')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/index', content)
  })
  // END__######################################################################################################
}
