module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-why-not', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_11-additional-info-minors/context-additional-info')
 })

 // Pass the question in to the page
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-why-not/', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
