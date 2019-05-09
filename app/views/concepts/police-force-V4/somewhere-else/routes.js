module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/police-force-v4/somewhere-else', function (req, res) {

   res.redirect('/')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v4/somewhere-else/', function (req, res) {
    res.render('concepts/police-force-v4/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
