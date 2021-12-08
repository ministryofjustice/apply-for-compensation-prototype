module.exports = function (router, content) {

router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/pregnancy', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/pregnancy/loss')
})

router.post('/application/_3-3rd-party-reps/_2-minors/_5-injuries/pregnancy/loss', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_2-minors/_5-injuries/context-about-dmi')
})

// END__######################################################################################################
}
