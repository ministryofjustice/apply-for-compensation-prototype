const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {

  // START__####################################################################################################
  // File: incident-date
  // Variables: incident-date-day, incident-date-month, incident-date-year

  router.post('/concepts/police-force-v4/incident-date', function (req, res) {

          res.redirect('/concepts/police-force-v4/incident-location')

  })

  // Pass the question in to the page
  router.get('/concepts/police-force-v4/incident-date/', function (req, res) {
    res.render('concepts/police-force-v4/incident-date/index', content)
  })
  // END__######################################################################################################
}
