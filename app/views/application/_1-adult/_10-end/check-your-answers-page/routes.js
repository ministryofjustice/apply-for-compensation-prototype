module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/application/_1-adult/_10-end/check-your-answers-page', function (req, res) {

     var buttonClicked = req.session.data['buttonClicked'];

     if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

       if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
         return res.redirect('/application/_1-adult/_10-end/check-your-answers-page')
       }

       // set section status to completed
       req.session.data['check_your_answers_status'] = 'completed'

       res.redirect('/application/_1-adult/_10-end/declaration')
     } else if (buttonClicked === 'Save and complete application later') {
       return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
     }
   })

   // Pass the question in to the page
   router.get('/application/_1-adult/_10-end/check-your-answers-page/', function (req, res) {
     res.render('application/_1-adult/_10-end/check-your-answers-page/index', content)
   })

   // Pass the question in to the page
   router.get('/application/_1-adult/_10-end/check-your-answers-page/', function (req, res) {
     res.render('application/_1-adult/_10-end/check-your-answers-page/cya', content)
   })
  // END__######################################################################################################
}
