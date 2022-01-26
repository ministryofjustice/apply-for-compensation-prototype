module.exports = function (router, content) {
// START__####################################################################################################



router.post('/application/_3-3rd-party-reps/_1-adult/_2-your-details/someone-else-responsible', function (req, res) {

  var someoneElseResponsible = req.session.data['someoneElseResponsible'];

  if (someoneElseResponsible === 'Yes') {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/context-capable-adult')
  } else {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_2-your-details/follow-up-responsible-person')
  }
})

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_1-adult/_2-your-details/someone-else-responsible/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_1-adult/_2-your-details/someone-else-responsible/index', content)
})


// END__######################################################################################################
}
