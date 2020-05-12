module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries', function (req, res) {
    let headNeckFaceDetail = req.session.data['headNeckFaceDetail'] || []

    // If they pick apple or banana then show them the success page
    if (headNeckFaceDetail.includes('Brain injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/brain')

    } else if (headNeckFaceDetail.includes('Ear or hearing injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/ear-hearing')

    } else if (headNeckFaceDetail.includes('Eye or sight injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight')
    }

    } else if (headNeckFaceDetail.includes('Facial injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/facial')
    }
    } else if (headNeckFaceDetail.includes('Neck injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck')
    }
    } else if (headNeckFaceDetail.includes('Nose injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose')
    }
    } else if (headNeckFaceDetail.includes('Skull injury')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/skull')
    }
    } else if (headNeckFaceDetail.includes('Injury to teeth or mouth')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/index', content)
  })
  // END__######################################################################################################
}
