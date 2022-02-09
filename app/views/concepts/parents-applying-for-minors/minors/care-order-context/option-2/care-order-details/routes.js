module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details', function (req, res) {
    res.redirect('/concepts/parents-applying-for-minors/minors/end')
  })

  // Pass the question in to the page
  router.get('/concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details/', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details/index', content)
  })

  router.get('/concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details/error', function (req, res) {
    res.render('concepts/parents-applying-for-minors/minors/care-order-context/option-2/care-order-details/error', content)
  })

  // END__######################################################################################################
}
