module.exports = function (router, content) {
// START__####################################################################################################
// File: DMI Treatment

router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/dmi-treatment-types', function (req, res) {





    // Get the answer from the query string

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_end/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/finished-treatment')


})

// Pass the question in to the page
router.get('/concepts/third-party-reps/prototype/_08-treatment-adults/dmi-treatment-types/', function (req, res) {
  res.render('concepts/third-party-reps/prototype/_08-treatment-adults/dmi-treatment-types/index', content)
})

// END__######################################################################################################
}
