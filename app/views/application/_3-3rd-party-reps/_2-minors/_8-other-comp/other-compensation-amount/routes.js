module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_9-additional-info/context-additional-info')
 })

 // Pass the question in to the page
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-amount', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-who', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-radios', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-when', function (req, res) {
   res.render('application/_3-3rd-party-reps/_2-minors/_8-other-comp/other-compensation-amount/error-when', content)
 })
  // END__######################################################################################################
}
