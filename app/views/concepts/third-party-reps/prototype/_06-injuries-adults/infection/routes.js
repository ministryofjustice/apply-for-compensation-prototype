module.exports = function (router, content) {

router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/infection', function (req, res) {

    // Get the answer from the query string
    var haveInfection = req.session.data['haveInfection']
    var incidentType = req.session.data['incidentType']

    if (haveInfection === 'No' || haveInfection === "I'm not sure") {
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-pregnancy')        // go to the pregnancy context screen if user doesn't have an infection
    } else if (incidentType === 'Sexual assault or abuse'){             // if a sexual assault or abuse application
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/details-vosaa')  // show the vosaa-specific infection details question
    } else {
      res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/details')        // otherwise, show the non-vosaa infection details question
    }
})


router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/details', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-pregnancy')
})

router.post('/concepts/third-party-reps/prototype/_06-injuries-adults/infection/details-vosaa', function (req, res) {
    res.redirect('/concepts/third-party-reps/prototype/_06-injuries-adults/context-pregnancy')
})

// END__######################################################################################################
}
