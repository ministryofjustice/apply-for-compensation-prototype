module.exports = function (router, content) {

router.post('/application/_3-3rd-party-reps/_1-adult/_5-injuries/infection', function (req, res) {

  var buttonClicked = req.session.data['buttonClicked'];

  if ( (buttonClicked === 'Save and continue') || (buttonClicked === 'Continue') ) {

    // Get the answer from the query string
    var haveInfection = req.session.data['haveInfection']
    var incidentType = req.session.data['incidentType']

    if (haveInfection === 'No' || haveInfection === "I'm not sure") {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/context-pregnancy')        // go to the pregnancy context screen if user doesn't have an infection
    } else if (incidentType === 'Sexual assault or abuse'){             // if a sexual assault or abuse application
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/infection/details-vosaa')  // show the vosaa-specific infection details question
    } else {
      res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/infection/details')        // otherwise, show the non-vosaa infection details question
    }
  } else if (buttonClicked === 'Save and complete application later') {
    return res.redirect('/application/_0-save-and-return-screens/save-confirmation')
  }
})

router.post('/application/_3-3rd-party-reps/_1-adult/_5-injuries/infection/details', function (req, res) {
    res.redirect('/application/_3-3rd-party-reps/_1-adult/_5-injuries/context-pregnancy')
})

// END__######################################################################################################
}
