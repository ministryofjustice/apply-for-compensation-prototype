module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

 router.post('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation', function (req, res) {





     // Get the answer from the query string
     var otherCompensation = req.session.data['other-compensation']

     if (otherCompensation === 'No') {
       // Redirect to the relevant page
       res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-why-not')
     } else {
       if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
         return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
       }
       // If the variable is any other value (or is missing) render the page requested
       res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-provider')
     }


 })

 // Pass the question in to the page
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/index', content)
 })

 // Pass the Error state in to the page when no radios are selected
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/error-no-radio', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/error-no-radio', content)
 })

 // Pass the Error state in to the page when No is selected but user enters no text in explanation field
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/error-no-why-not', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation/error-no-why-not', content)
 })
  // END__######################################################################################################
}
