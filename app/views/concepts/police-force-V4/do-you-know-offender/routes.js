module.exports = function (router, content) {

  router.post('/concepts/police-force-v4/do-you-know-offender', function (req, res) {

      res.redirect('/')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v4/do-you-know-offender/', function (req, res) {
    res.render('concepts/police-force-v4/do-you-know-offender/index', content)
  })


  // END__######################################################################################################
}
