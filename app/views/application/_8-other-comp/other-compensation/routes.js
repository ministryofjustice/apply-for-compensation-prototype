module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

 router.post('/application/_8-other-comp/other-compensation', function (req, res) {

   var buttonClicked = req.session.data['buttonClicked'];

   if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

     // Get the answer from the query string
     var otherCompensation = req.session.data['other-compensation']

     if (otherCompensation === 'No') {
       // Redirect to the relevant page
       res.redirect('/application/_8-other-comp/other-compensation-why-not')
     } else {
       if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
         return res.redirect('/application/_10-end/check-your-answers-page')
       }
       // If the variable is any other value (or is missing) render the page requested
       res.redirect('/application/_8-other-comp/other-compensation-provider')
     }
   } else if (buttonClicked === 'Save and complete application later') {
     return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
   }
 })

 // Pass the question in to the page
 router.get('/application/_8-other-comp/other-compensation/', function (req, res) {
   res.render('application/_8-other-comp/other-compensation/index', content)
 })

 // Pass the Error state in to the page when no radios are selected
 router.get('/application/_8-other-comp/other-compensation/error-no-radio', function (req, res) {
   res.render('application/_8-other-comp/other-compensation/error-no-radio', content)
 })

 // Pass the Error state in to the page when No is selected but user enters no text in explanation field
 router.get('/application/_8-other-comp/other-compensation/error-no-why-not', function (req, res) {
   res.render('application/_8-other-comp/other-compensation/error-no-why-not', content)
 })
  // END__######################################################################################################
}
