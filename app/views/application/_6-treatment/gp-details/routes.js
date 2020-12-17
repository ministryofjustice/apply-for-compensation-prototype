module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/application/_6-treatment/gp-details', function (req, res) {

    let injuredParts = req.session.data['injuredParts']

    if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/application/_6-treatment/dentist-visited')
    } else {
      res.redirect('/application/_7-financial-losses/context-your-money/')
    }
  })

  // Pass the question in to the page
  router.get('/application/_6-treatment/gp-details/', function (req, res) {
    res.render('application/_6-treatment/gp-details/index', content)
  })

  // END__######################################################################################################
}
