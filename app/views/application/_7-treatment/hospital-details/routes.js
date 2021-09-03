module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Other medical treatment address
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/_7-treatment/hospital-details', function (req, res) {

    // set section status to completed
    req.session.data['your_treatment_status'] = 'completed'
    
    res.redirect('/application/_8-other-comp/context-prev-compensation')
  })

  // END__######################################################################################################
}
