module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/application/_0-save-and-return-screens/success', function (req, res) {

    var screenExited = req.session.data['screen-exited']

    if ( screenExited === undefined ) {
      res.redirect('/application/_3-incident-details/context-incident-details')
    } else {
      res.redirect('/application/' + screenExited)
    }
  })

  // Pass the question in to the page
  router.get('/application/_0-save-and-return-screens/success/', function (req, res) {
    res.render('application/_0-save-and-return-screens/success/index', content)
  })

  // END__######################################################################################################
}
