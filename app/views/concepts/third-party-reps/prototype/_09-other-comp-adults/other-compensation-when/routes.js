module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when', function (req, res) {





      // set section status to completed
      req.session.data['other_compensation_status'] = 'completed'

      res.redirect('/concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info')


 })

 // Pass the question in to the page
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-amount', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-who', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-radios', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-when', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-when/error-when', content)
 })
  // END__######################################################################################################
}
