module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-why-not', function (req, res) {





      // set section status to completed
      req.session.data['other_compensation_status'] = 'completed'

      res.redirect('/concepts/third-party-reps/prototype/_10-additional-info-adults/context-additional-info')



 })

 // Pass the question in to the page
 router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-why-not/', function (req, res) {
   res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
