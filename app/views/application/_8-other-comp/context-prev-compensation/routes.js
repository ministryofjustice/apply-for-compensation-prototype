module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_8-other-comp/context-prev-compensation', function (req, res) {

    // set section status to completed
    req.session.data['other_compensation_status'] = 'in progress'
    
    res.redirect('/application/_8-other-comp/previous-applications')
  })

  // Pass the question in to the page
  router.get('/application/_8-other-comp/context-prev-compensation/', function (req, res) {
    res.render('application/_8-other-comp/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
