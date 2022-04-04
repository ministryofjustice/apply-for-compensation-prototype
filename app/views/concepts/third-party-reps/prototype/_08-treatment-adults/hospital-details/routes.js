module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Other medical treatment address
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-details', function (req, res) {





      // set section status to completed
      req.session.data['your_treatment_status'] = 'completed'

      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation')


  })

  // END__######################################################################################################
}
