module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/compensation', function (req, res) {
  
    res.redirect('/application/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/application/compensation/', function (req, res) {
    res.render('application/compensation/index', content)
  })
  // END__######################################################################################################
}
