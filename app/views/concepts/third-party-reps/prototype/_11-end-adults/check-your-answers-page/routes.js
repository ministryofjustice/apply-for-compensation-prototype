module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page', function (req, res) {


     var capableOwnAffairs = req.session.data['capableOwnAffairs'];



       if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
         return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page')
       }

       // set section status to completed
       req.session.data['check_your_answers_status'] = 'completed'

       if (capableOwnAffairs === 'Yes') {
         return res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration-incapable-adult')
       } else {
         res.redirect('/concepts/third-party-reps/prototype/_11-end-adults/declaration')
       }



   })

   // Pass the question in to the page
   router.get('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page/', function (req, res) {
     res.render('concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page/index', content)
   })

   // Pass the question in to the page
   router.get('/concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page/', function (req, res) {
     res.render('concepts/third-party-reps/prototype/_11-end-adults/check-your-answers-page/cya', content)
   })
  // END__######################################################################################################
}
