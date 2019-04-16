
module.exports = function (router, content) {

  router.post('/concepts/police-force-V3', function (req, res) {

   res.redirect('/concepts/police-force-V3/country')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-V3/', function (req, res) {
    res.render('concepts/police-force-V3/index', content)
  })

  // END__######################################################################################################
}
