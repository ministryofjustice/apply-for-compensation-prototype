
module.exports = function (router, content) {


// ##################### Option for extra questions #####################
  router.post('/concepts/survey/optin', function (req, res) {

      let survey = req.session.data['survey']

      console.log(req.session.data['survey'])

      //Option 1
      if (survey === 'Yes') {
          res.redirect('gender')
      }
      //Option 2
      else if (survey === 'No') {
          res.redirect('finish')
      }
      //end
  })



// ##################### Main ethnic page #####################
      router.post('/concepts/survey/ethnic-main', function (req, res) {

          let ethnicgroup = req.session.data['ethnicgroup']

          console.log(req.session.data['ethnicgroup'])

          //Option 1
          if (ethnicgroup === 'Asian or Asian British') {
              res.redirect('Asian')
          }
          //Option 2
          else if (ethnicgroup === 'Black, African, Black British or Carribean') {
              res.redirect('Black')
          }
          //Option 3
          else if (ethnicgroup === 'Mixed or multiple ethnic groups') {
              res.redirect('Mixed')
          }
          //Option 4
          else if (ethnicgroup === 'White') {
              res.redirect('White')
          }
          //Option 5
          else if (ethnicgroup === 'Another ethnic group') {
              res.redirect('Other')
          }
          //Option 6
          else if (ethnicgroup === 'prefer-not-to-say') {
              res.redirect('xxxx')
          }
          //end
      })
















  // END__######################################################################################################
}
