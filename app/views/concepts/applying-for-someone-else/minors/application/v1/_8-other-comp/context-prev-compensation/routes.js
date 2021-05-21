module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/context-prev-compensation', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/previous-applications')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/context-prev-compensation/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
