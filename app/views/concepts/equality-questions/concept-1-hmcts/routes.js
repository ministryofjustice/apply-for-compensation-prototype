module.exports = function (router, content) {

  // ##################### Start screen #####################
    router.post('/concepts/equality-questions/concept-1-hmcts/start', function (req, res) {

        let equalityQuestions = req.session.data['equalityQuestions']
        console.log(req.session.data['equalityQuestions'])

        //Option 1
        if (equalityQuestions === 'yes') {
            res.redirect('sex')
        }
        //Option 2
        else {
            res.redirect('confirmation-no-equality-questions')
        }
        //end
    })

// ##################### Initial disability question #####################
  router.post('/concepts/equality-questions/concept-1-hmcts/disability', function (req, res) {

      let haveDisability = req.session.data['haveDisability']
      console.log(req.session.data['haveDisability'])

      //Option 1
      if (haveDisability === 'yes') {
          res.redirect('disability-yes')
      }
      //Option 2
      else {
          res.redirect('ethnicity')
      }
      //end
  })

// ##################### Disability reduced ability page #####################
  router.post('/concepts/equality-questions/concept-1-hmcts/disability-yes', function (req, res) {

      let disabilityYes = req.session.data['disabilityYes']

      console.log(req.session.data['disabilityYes'])

      if (disabilityYes === 'yes-a-lot' || disabilityYes === 'yes-a-little') {
          res.redirect('disability-yes-detail')
      }
      else {
          res.redirect('ethnicity')
      }
      //end
  })

// ##################### Main ethnicity page #####################
  router.post('/concepts/equality-questions/concept-1-hmcts/ethnicity', function (req, res) {

      let ethnicgroup = req.session.data['ethnicgroup']

      console.log(req.session.data['ethnicgroup'])

      //Option 1
      if (ethnicgroup === 'Asian or Asian British') {
          res.redirect('ethnicity-asian')
      }
      //Option 2
      else if (ethnicgroup === 'Black, African, Caribbean or Black British') {
          res.redirect('ethnicity-black')
      }
      //Option 3
      else if (ethnicgroup === 'Mixed or multiple ethnic groups') {
          res.redirect('ethnicity-mixed')
      }
      //Option 4
      else if (ethnicgroup === 'White') {
          res.redirect('ethnicity-white')
      }
      //Option 5
      else if (ethnicgroup === 'Another ethnic group') {
          res.redirect('ethnicity-other')
      }
      //Option 6
      else if (ethnicgroup === 'prefer-not-to-say') {
          res.redirect('confirmation')
      }
      //end
  })


}
