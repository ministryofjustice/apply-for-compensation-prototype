module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/application/_6-impact/loe-se-affected-daily-life', function (req, res) {

    var stoppedWorking = req.session.data['stoppedWorking']

    if (stoppedWorking === "No") {

      // set section status to completed
      req.session.data['impact_status'] = 'completed'

      res.redirect('/application/_7-treatment/context-treatment')
    } else {
      res.redirect('/application/_6-impact/se-context')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-impact/loe-se-affected-daily-life/', function (req, res) {
    res.render('application/_6-impact/loe-se-affected-daily-life/index', content)
  })
  // END__######################################################################################################
}
