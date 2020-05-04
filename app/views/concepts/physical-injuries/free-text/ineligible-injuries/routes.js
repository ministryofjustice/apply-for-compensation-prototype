module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/ineligible-injuries/head-face-neck', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('torso')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/torso.html')
    } else if (injuredParts.includes('arms')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/arms.html')
    } else if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/legs.html')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
    }
  })

  router.post('/concepts/physical-injuries/free-text/ineligible-injuries/torso', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('arms')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/arms.html')
    } else if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/legs.html')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
    }
  })

  router.post('/concepts/physical-injuries/free-text/ineligible-injuries/arms', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/legs.html')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
    }
  })

  router.post('/concepts/physical-injuries/free-text/ineligible-injuries/legs', function (req, res) {
      res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
  })

  // Pass the questions in to the page
  router.get('/concepts/physical-injuries/free-text/ineligible-injuries/head-face-neck/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/ineligible-injuries/head-face-neck.html', content)
  })
  router.get('/concepts/physical-injuries/free-text/ineligible-injuries/torso/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/ineligible-injuries/torso.html', content)
  })
  router.get('/concepts/physical-injuries/free-text/ineligible-injuries/arms/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/ineligible-injuries/arms.html', content)
  })
  router.get('/concepts/physical-injuries/free-text/ineligible-injuries/legs/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/ineligible-injuries/legs.html', content)
  })

  // END__######################################################################################################
}
