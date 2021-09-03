module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_4-offender/context-contact-with-offender', function (req, res) {

    // set section status to completed
    req.session.data['about_the_offender_status'] = 'in progress'

    res.redirect('/application/_4-offender/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/context-contact-with-offender/', function (req, res) {
    res.render('application/_4-offender/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
