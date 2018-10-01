module.exports = function (router) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/application/check-your-answers-page', function (req, res) {
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
       return res.redirect('/application/check-your-answers-page')
     }
     res.redirect('/application/confirmation-page')
   })
  // END__######################################################################################################
}
