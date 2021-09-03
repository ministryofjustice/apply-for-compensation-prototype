module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_3-incident-details/context-incident-details', function (req, res) {

    // set section status for task list
    req.session.data['about_the_crime_status'] = 'in progress'

    res.redirect('/application/_3-incident-details/incident-type')
  })

  // Pass the question in to the page
  router.get('/application/_3-incident-details/context-incident-details/', function (req, res) {
    res.render('application/_3-incident-details/context-incident-details/index', content)
  })
  // END__######################################################################################################
}
