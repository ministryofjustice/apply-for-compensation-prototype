module.exports = function (router, content) {
// START__####################################################################################################
// File: Other medical treatment?

router.post('/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-visited', function (req, res) {





    // Get the answer from the query string

    var seekMedicalHelp = req.session.data['seekMedicalHelp']

    if (seekMedicalHelp === 'Yes') {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'in progress'

      res.redirect('/concepts/third-party-reps/prototype/_08-treatment-adults/hospital-details')
    } else {

      // set section status to completed
      req.session.data['your_treatment_status'] = 'completed'

      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/third-party-reps/prototype/_09-other-comp-adults/context-prev-compensation')
    }



})


// END__######################################################################################################
}
