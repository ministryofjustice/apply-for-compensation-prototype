module.exports = function (router, content) {
  // START__####################################################################################################

  /* >>>>> Existing or new <<<<< */
  router.post('/concepts/divert-duplicate-apps/existing-or-new', function (req, res) {
    var existingOrNew = req.session.data['existingOrNew']
    if (existingOrNew === 'Update an existing application') {
      res.redirect('/concepts/divert-duplicate-apps/transition')
    } else {
      res.redirect('/concepts/divert-duplicate-apps/fatal-application')
    }
  })

  /* >>>>> Fatal application <<<<< */
  router.post('/concepts/divert-duplicate-apps/fatal-application', function (req, res) {
      res.redirect('/concepts/end')
  })

  // END__######################################################################################################
}