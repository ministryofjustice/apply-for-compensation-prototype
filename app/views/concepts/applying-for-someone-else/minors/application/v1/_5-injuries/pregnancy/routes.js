module.exports = function (router, content) {

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/pregnancy', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/pregnancy/loss')
})

router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/pregnancy/loss', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
})

// END__######################################################################################################
}
