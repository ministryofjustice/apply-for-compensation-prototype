// ALLOWS DIFFERENT ROUTES FOR YES, NO AND BLANK RESPONSES

module.exports = function (router, content) {

  // UPDATE THESE VARIABLES
  var questionPage = 'concepts/applying-for-someone-else/minors/application/v1/_6-impact/has-crime-affected';   // where is the question?
                                                                          // note: no slash at beginning or end
  var formName = 'hasCrimeAffected';                                            // form name from index.html
  var ifNo = '/concepts/applying-for-someone-else/minors/application/v1/_6-impact/affected-daily-life';            // route if no
  var ifYes = '/concepts/applying-for-someone-else/minors/application/v1/_6-impact/impact-long-term';             // route if yes
  var ifElse = '/concepts/applying-for-someone-else/minors/application/v1/_6-impact/impact-long-term';                                           // route if left blank

  router.post('/' + questionPage, function (req, res) {

    var formInput = req.session.data[formName]

    if (formInput === 'No') {
      res.redirect(ifNo)
    } else if (formInput === 'Yes') {
      res.redirect(ifYes)
    } else {
      res.redirect(ifElse)
    }
  })

  router.get(questionPage, function (req, res) {
    res.render('/' + questionPage + '/index', content)
  })
}
