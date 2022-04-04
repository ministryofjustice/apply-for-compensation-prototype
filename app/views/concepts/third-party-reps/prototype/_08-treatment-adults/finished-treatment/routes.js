module.exports = function (router, content) {
// START__####################################################################################################
// File: Finished Treatment

router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/finished-treatment', function (req, res) {





    res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/gp-registered')



})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_08-treatment-adults/finished-treatment/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_08-treatment-adults/finished-treatment/index', content)
})


// END__######################################################################################################
}
