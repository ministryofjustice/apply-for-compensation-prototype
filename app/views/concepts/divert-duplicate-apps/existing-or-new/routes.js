module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/divert-duplicate-apps/existing-or-new', function (req, res) {

    var existingOrNew = req.session.data['existingOrNew']

    if (existingOrNew === 'Update an existing application') {
      res.redirect('/concepts/divert-duplicate-apps/transition')
    } else {
      res.redirect('/concepts/divert-duplicate-apps/fatal-application')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/divert-duplicate-apps/existing-or-new/', function (req, res) {
    res.render('concepts/divert-duplicate-apps/existing-or-new/index', content)
  })
  // END__######################################################################################################
}
