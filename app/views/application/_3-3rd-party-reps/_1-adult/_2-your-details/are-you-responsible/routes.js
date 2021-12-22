module.exports = function (router, content) {
// START__####################################################################################################



router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/are-you-responsible', function (req, res) {

  var haveResponsibility = req.session.data['haveResponsibility'];

  if (haveResponsibility === 'Yes') {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/authority-to-apply-adult')
  } else {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult')
  }
})

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/are-you-responsible/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/are-you-responsible/index', content)
})


// END__######################################################################################################
}
