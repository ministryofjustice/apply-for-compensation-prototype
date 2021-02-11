module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details', function (req, res) {

    let injuredParts = req.session.data['injuredParts']

    if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-financial-losses/context-your-money/')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details/index', content)
  })

  // END__######################################################################################################
}
