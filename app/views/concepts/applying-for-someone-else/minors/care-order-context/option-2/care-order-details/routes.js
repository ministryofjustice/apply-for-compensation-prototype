module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name
  //
  router.post('/concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/end')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details/error', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/care-order-context/option-2/care-order-details/error', content)
  })

  // END__######################################################################################################
}
