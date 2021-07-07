module.exports = function (router, content) {

router.post('/application/_5-injuries/pregnancy', function (req, res) {
    res.redirect('/application/_5-injuries/pregnancy/loss')
})

router.post('/application/_5-injuries/pregnancy/loss', function (req, res) {
    res.redirect('/application/_5-injuries/context-about-dmi')
})

// END__######################################################################################################
}
