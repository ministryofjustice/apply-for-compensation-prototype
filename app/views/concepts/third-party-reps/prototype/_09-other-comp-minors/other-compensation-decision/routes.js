module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision', function (req, res) {
    // Get the answer from the query string
    var otherCompDecision = req.session.data['comp-decision-answer']

    if (otherCompDecision === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-when')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/third-party-reps/prototype/_11-end-minors/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-amount')
    }
  })

 // Pass the question in to the page
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-amount', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-who', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-radios', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-when', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/other-compensation-decision/error-when', content)
 })
  // END__######################################################################################################
}
