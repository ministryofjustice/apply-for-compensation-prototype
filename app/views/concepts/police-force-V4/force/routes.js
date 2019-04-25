
module.exports = function (router, content) {

  router.post('/concepts/police-force-V4/force', function (req, res) {

   res.redirect('/concepts/police-force-V4/crime-reference')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-V4/force/', function (req, res) {
    res.render('concepts/police-force-V4/force/index', content)
  })

  // END__######################################################################################################
}
