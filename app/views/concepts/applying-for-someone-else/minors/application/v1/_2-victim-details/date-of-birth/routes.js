const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: date-of-birth
  //
  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-incident', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-incident', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-incomplete', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-incomplete', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-past', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-past', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-reported', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-reported', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-start', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-start', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-stop', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/error-before-stop', content)
  })
// END__######################################################################################################
}
