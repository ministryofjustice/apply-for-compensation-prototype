module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/other-compensation-why-not', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_9-additional-info/context-additional-info')
 })

 // Pass the question in to the page
 router.get('/concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/other-compensation-why-not/', function (req, res) {
   res.render('concepts/applying-for-someone-else/minors/application/v1/_8-other-comp/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
