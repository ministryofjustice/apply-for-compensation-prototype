module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing', function (req, res) {

    let headNeckFaceArea = req.session.data['headNeckFaceArea'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // Go to detail
    if (headNeckFaceArea.includes('Eye or eyesight')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/eye-sight/')
      // Go to detail
    } else if (headNeckFaceArea.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/nose/')
      // Go to detail
    } else if (headNeckFaceArea.includes('Teeth')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/teeth/')
      // Go to body part section
    } else if (headNeckFaceArea.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue/')
      // Go to new body part section
    } else if (injuredParts.includes('Legs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/')
    } else if (injuredParts.includes('Torso, back or abdomen')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
    } else {
      // Go to end
      res.redirect('/concepts/physical-injuries/one-q-page-v2/your-injuries')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing/index', content)
  })
  // END__######################################################################################################
}
