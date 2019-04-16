
module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/police-force-v3/england-forces', function (req, res) {
  // Get the answer from the query string
    res.redirect('/concepts/police-force-v3/crime-reference')

})

// Pass the question in to the page
router.get('/concepts/police-force-v3/england-forces', function (req, res) {
  res.render('concepts/police-force-v3/england-forces/index', content)
})

// END__######################################################################################################
}
