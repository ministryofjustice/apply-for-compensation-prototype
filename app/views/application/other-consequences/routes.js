module.exports = function (router, content) {
  // START__####################################################################################################
  // File: other-consequences
  // Variable: incidentReported
  router.post('/application/other-consequences', function (req, res) {
    // Get the answer from the query string
    var otherCons = req.session.data['otherCons'];
     console.log("otherCons:", otherCons);
     if (otherCons && (otherCons.includes('pregnancy') || otherCons.includes('lossofFoetus') || otherCons.includes('STD'))) {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/declaration')
    }
    })

  // Pass the question in to the page
  router.get('/application/other-consequences/', function (req, res) {
    res.render('application/other-consequences/index', content)
  })
  // END__######################################################################################################
}
