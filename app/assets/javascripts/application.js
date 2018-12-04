/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  // This adds another of the compoent defined after the id of the same thing
    $("#addAnother").click(function(){
      $("#offenderName").after(
        '<h2 class="govuk-heading-m">Offender 2</h2>' +
        '<div id="offenderName">' +
          '<div class="govuk-form-group">' +
            '<label class="govuk-label" for="name">' +
              'First name' +
            '</label>' +
            '<input class="govuk-input" id="name" name="name" type="text">' +
          '</div>' +
          '<div class="govuk-form-group">' +
            '<label class="govuk-label" for="name">' +
              'Last name' +
            '</label>' +
            '<input class="govuk-input" id="name" name="name" type="text">' +
          '</div>' +
        '</div>' +
        '<p><a href="#" id="#removeOffender">Remove offender</a></p>'
      );
    });

    // remove a prisons
    $(document).on('click', '#removeOffender', function () {
      $(this).parents('#offenderName').remove();
      // sortParentFields();
    });

})
