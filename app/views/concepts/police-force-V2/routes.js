
module.exports = function (router, content) {

  router.post('/concepts/police-force-V2', function (req, res) {

   req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
   // else we're under 2 days


   res.redirect('/concepts/police-force-V2/force-search/')
  })

  // Pass the question in to the page
  router.get('/concepts/police-force-V2/', function (req, res) {
    res.render('concepts/police-force-V2/index', content)
  })

  // END__######################################################################################################
}
