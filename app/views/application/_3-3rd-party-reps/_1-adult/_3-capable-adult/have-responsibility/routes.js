module.exports = function (router, content) {
// START__####################################################################################################



router.post('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility', function (req, res) {

  var haveResponsibility = req.session.data['haveResponsibility'];

  if (haveResponsibility === 'Yes') {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/authority-to-apply-adult')
  } else {
    return res.redirect('/application/_3-3rd-party-reps/_1-adult/_3-incident-details/context-incident-details')
  }
})

// Pass the question in to the page
router.get('/application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility/', function (req, res) {
  res.render('application/_3-3rd-party-reps/_1-adult/_3-capable-adult/have-responsibility/index', content)
})


// END__######################################################################################################
}
