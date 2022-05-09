module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/third-party-reps/prototype/_03-rep-details/name', function (req, res) {

    var repType = req.session.data['rep-type']

    if (repType === 'Friend or relative' || repType === 'Foster carer') {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/address')
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_03-rep-details/organisation-name')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_03-rep-details/name/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_03-rep-details/name/index', content)
  })
  // END__######################################################################################################
}
