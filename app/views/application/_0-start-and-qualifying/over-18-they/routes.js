module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18-they
  // Variable: over18

  router.post('/application/_0-start-and-qualifying/over-18-they', function (req, res) {

    var over18 = req.session.data['over18']

    if (over18 === 'Yes') {
      res.redirect('/application/_0-start-and-qualifying/transition')
    } else {
      res.redirect('/application/_0-start-and-qualifying/british-citizen-they')
    }

  })

  // Pass the question in to the page
  router.get('/application/_0-start-and-qualifying/over-18-they/', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-they/index', content)
  })
  //error page
  router.get('/application/_0-start-and-qualifying/over-18-they/error', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-they/error', content)
  })
  //error page
  router.get('/application/_0-start-and-qualifying/over-18-they/transition', function (req, res) {
    res.render('application/_0-start-and-qualifying/over-18-they/transition', content)
  })
  // END__######################################################################################################
}
