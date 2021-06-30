// SAME ROUTE REGARDLESS OF FORM SUBMISSION

module.exports = function (router, content) {

  // UPDATE THESE VARIABLES
  var questionPage = 'concepts/applying-for-someone-else/minors/application/v1/_6-impact/affected-daily-life';   // where is the question?
                                                                          // note: no slash at beginning or end
  var route = '/concepts/applying-for-someone-else/minors/application/v1/_7-treatment/context-treatment';                                            // route if left blank

  router.post('/' + questionPage, function (req, res) {
    res.redirect(route)
  })

  // Pass the question in to the page
  router.get(questionPage, function (req, res) {
    res.render('/' + questionPage + '/index', content)
  })
}
