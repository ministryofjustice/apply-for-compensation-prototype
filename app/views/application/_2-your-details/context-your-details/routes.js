module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_2-your-details/context-your-details', function (req, res) {

    // set section status for task list
    req.session.data['your_details_status'] = 'in progress'

    res.redirect('/application/_2-your-details/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/application/_2-your-details/context-your-details/', function (req, res) {
    res.render('application/_2-your-details/context-your-details/index', content)
  })
  // END__######################################################################################################
}
