module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/_8-other-comp/other-compensation-why-not', function (req, res) {

    // set section status to completed
    req.session.data['other_compensation_status'] = 'completed'
    
    res.redirect('/application/_9-additional-info/context-additional-info')
 })

 // Pass the question in to the page
 router.get('/application/_8-other-comp/other-compensation-why-not/', function (req, res) {
   res.render('application/_8-other-comp/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
