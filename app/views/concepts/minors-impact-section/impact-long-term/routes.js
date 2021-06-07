// SAME ROUTE REGARDLESS OF FORM SUBMISSION

module.exports = function (router, content) {

  // UPDATE THESE VARIABLES
  var questionPage = 'concepts/minors-impact-section/impact-long-term';   // where is the question?
                                                                          // note: no slash at beginning or end
  var route = '/concepts/minors-impact-section/affected-daily-life';                                            // route if left blank

  router.post('/' + questionPage, function (req, res) {
    res.redirect(route)
  })

  // Pass the question in to the page
  router.get(questionPage, function (req, res) {
    res.render('/' + questionPage + '/index', content)
  })
}
