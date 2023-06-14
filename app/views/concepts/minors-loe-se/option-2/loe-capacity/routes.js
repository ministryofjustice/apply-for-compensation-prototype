module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/minors-loe-se/option-2/loe-capacity', function (req, res) {
    let workCapacity = req.session.data['workCapacity'] || []

    if (workCapacity.includes('no')) {
      res.redirect('/concepts/end')
    } else if (workCapacity.includes('yes-current')) {
      res.redirect('/concepts/minors-loe-se/option-2/loe-working/')
    } else if (workCapacity.includes('yes-future')) {
     res.redirect('/concepts/minors-loe-se/option-2/se-context/')
   }
  })

  // END__######################################################################################################
}
