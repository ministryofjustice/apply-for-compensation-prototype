module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-minors/previous-applications')
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_09-other-comp-minors/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
