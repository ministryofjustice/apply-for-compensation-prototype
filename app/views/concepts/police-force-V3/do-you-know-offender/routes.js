module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender
  // Variable: know-offender

  router.post('/concepts/police-force-v3/do-you-know-offender', function (req, res) {

      res.redirect('/')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v3/do-you-know-offender/', function (req, res) {
    res.render('concepts/police-force-v3/do-you-know-offender/index', content)
  })


  // END__######################################################################################################
}
