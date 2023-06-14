module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first/most-common/cuts-grazes', function (req, res) {

        let mostCommonInjuries = req.session.data['mostCommonInjuries'] || []

        // If they pick apple or banana then show them the success page
        if (mostCommonInjuries.includes('Scarring')) {
          res.redirect('/concepts/physical-injuries/most-common-first/most-common/scarring')
        } else {
          res.redirect('/concepts/physical-injuries/most-common-first/your-injuries')
        }

      })

  // END__######################################################################################################
}
