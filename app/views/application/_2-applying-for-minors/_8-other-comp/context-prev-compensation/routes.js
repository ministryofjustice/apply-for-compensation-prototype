module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_2-applying-for-minors/_8-other-comp/context-prev-compensation', function (req, res) {
    res.redirect('/application/_2-applying-for-minors/_8-other-comp/previous-applications')
  })

  // Pass the question in to the page
  router.get('/application/_2-applying-for-minors/_8-other-comp/context-prev-compensation/', function (req, res) {
    res.render('application/_2-applying-for-minors/_8-other-comp/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
