module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_3-3rd-party-reps/_1-adult/_6-impact/se-special-equipment', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_6-impact/se-physical-aids')
  })

  // Pass the question in to the page
  router.get('/application/_3-3rd-party-reps/_1-adult/_6-impact/se-special-equipment/', function (req, res) {
    res.render('application/_3-3rd-party-reps/_1-adult/_6-impact/se-special-equipment/index', content)
  })
  // END__######################################################################################################
}
