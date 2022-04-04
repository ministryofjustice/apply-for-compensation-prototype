module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/third-party-reps/prototype/_07-impact-adults/se-special-equipment', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_07-impact-adults/se-physical-aids')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_07-impact-adults/se-special-equipment/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_07-impact-adults/se-special-equipment/index', content)
  })
  // END__######################################################################################################
}
