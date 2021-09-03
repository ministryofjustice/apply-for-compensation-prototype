module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/application/_9-additional-info/additional-info-details', function (req, res) {

    // set section status to completed
    req.session.data['additional_info_status'] = 'completed'

      res.redirect('/application/_10-end/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/application/_9-additional-info/additional-info-details/', function (req, res) {
    res.render('application/_9-additional-info/additional-info-details/index', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info-details/error', function (req, res) {
    res.render('application/_9-additional-info/additional-info-details/error', content)
  })
  //error page
  router.get('/application/_9-additional-info/additional-info-details/transition', function (req, res) {
    res.render('application/_9-additional-info/additional-info-details/transition', content)
  })
  // END__######################################################################################################
}
