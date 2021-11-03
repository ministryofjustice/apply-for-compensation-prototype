module.exports = function (router, content) {
// START__####################################################################################################
// File: DMI Treatment

router.post('/application/_7-treatment/dmi-treatment-types', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if (buttonClicked === 'Continue') {

    // Get the answer from the query string

      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/_end/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_7-treatment/finished-treatment')
    } else if (buttonClicked === 'Save and finish later') {
      return res.redirect('/application/_0-start-screens/save-confirmation')
    }
})

// Pass the question in to the page
router.get('/application/_7-treatment/dmi-treatment-types/', function (req, res) {
  res.render('application/_7-treatment/dmi-treatment-types/index', content)
})

// END__######################################################################################################
}
