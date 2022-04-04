module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation', function (req, res) {





      // set section status to completed
      req.session.data['other_compensation_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/previous-applications')


  })

  // Pass the question in to the page
  router.get('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation/', function (req, res) {
    res.render('concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
