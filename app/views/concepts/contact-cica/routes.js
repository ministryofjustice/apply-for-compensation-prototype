module.exports = function (router, content) {
  // START__####################################################################################################

  /* >>>>> Who are you contacting for <<<<< */
  router.post('/concepts/contact-cica/contacting-for-redirect', function (req, res) {
    var whoFor = req.session.data['whoFor']
    if (whoFor === 'someone else') {
      res.redirect('/concepts/contact-cica/someone-else/contacts-name')
    } else {
      res.redirect('/concepts/contact-cica/your-date-of-birth')
    }
  })

  /* >>>>> Existing claim <<<<< */
  router.post('/concepts/contact-cica/existing-claim-redirect', function (req, res) {
    var existing = req.session.data['existing']
    if (existing === 'no') {
      res.redirect('/concepts/contact-cica/type-of-enquiry')
    } else {
      res.redirect('/concepts/contact-cica/contacting-for')
    }
  })

  // END__######################################################################################################
}