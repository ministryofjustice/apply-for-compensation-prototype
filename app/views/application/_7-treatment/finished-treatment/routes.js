module.exports = function (router, content) {
// START__####################################################################################################
// File: Finished Treatment

router.post('/application/_7-treatment/finished-treatment', function (req, res) {
    res.redirect('/application/_7-treatment/gp-registered')

})

// Pass the question in to the page
router.get('/application/_7-treatment/finished-treatment/', function (req, res) {
  res.render('application/_7-treatment/finished-treatment/index', content)
})


// END__######################################################################################################
}
