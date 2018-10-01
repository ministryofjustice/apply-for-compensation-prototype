const moment = require('moment');
// START__Helpers functions ####################################################################################################################################

function getDatefrom2inputs(inputMonth, inputYear) {
    // using the 2 variables above to create a date object with moment which will be the last day of the month
    var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var date = moment([year, month]).endOf('month'); //create a date from the 2 elements we received from the user which is the last day of the month
    return date
}

// the functions below will help get the date we need to cover the over 2 years delay for applying and the over 48h delay for reporting
function getDatefrom3inputs(inputDay, inputMonth, inputYear) {
    // using the 3 variables above to create a date object with moment
    var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(inputDay, 10);
    var date = moment([year, month, day]); //create a date from the 3 elements we received from the user
    return date
}

function isReportedOver48h(incident, report) {
    var delay = moment.duration(report.diff(incident)); // / calculate the difference between the two (that's in milliseconds or something)
    var delayInDays = delay.asDays(); // take that number in days  - we can do that thanks to the Moment library
    return (delayInDays > 2) //reported more than 48h = 2 days after the incident
}
// END__#############################################################################################################################################################

module.exports = {
    getDatefrom2inputs,
    getDatefrom3inputs,
    isReportedOver48h
};