module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-why-not', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_9-additional-info/context-additional-info')
 })

 // Pass the question in to the page
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-why-not/', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
