/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(document).ready(function(){
  $(".moj-cookie-settings--success").hide();

  /// Fake hiding the cookie banner
  $(".cookie-banner__button-accept button").click(function(){
    $(".app-cookie-banner").hide();
  });

  $("#save-cookie-prefs").click(function(){
    $(window).scrollTop(0);
    $(".app-cookie-banner").hide();
    $(".moj-cookie-settings--success").show();
  });

})

$(document).ready(function(){

  $('.miller-columns li a').on('click', function () {
      $(this).parent().toggleClass('expanded').siblings().removeClass('expanded');
      // alert ('testing');
      return false;
  });

  $(".miller-columns li:has(ul)").addClass("has-children");

})

$(document).ready(function(){
    $("a.govuk-button").click(function(){
        var radioValue = $("[type='radio']:checked").val();

        /// Is it the local force?

        if(radioValue == "local-force"){
          window.location.href = "/forces-mockups/v1/offender/";
        }
        if(radioValue == "other-england-force"){
          window.location.href = "/forces-mockups/v1/england/forces/index";
        }
        if(radioValue == "scotland-force"){
          window.location.href = "/forces-mockups/v1/scotland/forces/";
        }
        if(radioValue == "wales-force"){
          window.location.href = "/forces-mockups/v1/wales/forces/";
        }
        if(radioValue == "british-transport-police"){
          window.location.href = "/forces-mockups/v1/offender/";
        }

        /// Pick English area

        if(radioValue == "crime-police-north-west"){
          window.location.href = "/forces-mockups/v1/england/forces/north-west";
        }
        if(radioValue == "crime-police-north-east"){
          window.location.href = "/forces-mockups/v1/england/forces/north-east";
        }
        if(radioValue == "crime-police-east-midlands"){
          window.location.href = "/forces-mockups/v1/england/forces/east-midlands";
        }
        if(radioValue == "crime-police-eastern"){
          window.location.href = "/forces-mockups/v1/england/forces/eastern";
        }
        if(radioValue == "crime-police-london"){
          window.location.href = "/forces-mockups/v1/england/forces/london";
        }
        if(radioValue == "crime-police-south-east"){
          window.location.href = "/forces-mockups/v1/england/forces/south-east";
        }
        if(radioValue == "crime-police-south-west"){
          window.location.href = "/forces-mockups/v1/england/forces/south-west";
        }
        if(radioValue == "crime-police-west-midlands"){
          window.location.href = "/forces-mockups/v1/england/forces/west-midlands";
        }
        if(radioValue == "crime-police-dont-know"){
          window.location.href = "/forces-mockups/v1/england/forces/all";
        }
    });
});


// New Modal counter
var dialog = document.getElementById("dialog");
var dialogOverlay = document.getElementById("dialog-overlay");
function trapFocus(element) {
    // Get all focussable elements in dialog box
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
        firstFocusableEl = focusableEls[0];
        lastFocusableEl = focusableEls[focusableEls.length - 1];
        KEYCODE_TAB = 9;
        KEYCODE_ESC = 27;
    // Set initial focus to be a empty div to gain focus within the dialog
    element.querySelector('.dialog-focus').focus();
    // Track Tab event and trap the focus to only elements within the dialog
    // Also track ESC key for closing the window
    element.addEventListener('keydown', function(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
      var isEscPressed = (e.key === 'Esc' || e.keyCode === KEYCODE_ESC);
      if (!isTabPressed && !isEscPressed) {
          return;
      }
      if (isTabPressed) {
        if ( e.shiftKey ) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
      }
      if (isEscPressed) {
        hideModal();
      }
  });
}
// toggle dialog and overlay classes
function toggleDialog() {
  dialog.classList.toggle("dialog");
  dialog.classList.toggle("hide");
  dialogOverlay.classList.toggle("hide");
  dialogOverlay.classList.toggle("dialog-overlay");
}
// show Modal dialog
function showModal() {
  toggleDialog();
  trapFocus(dialog);
};
// hide Modal dialog
function hideModal() {
  toggleDialog();
}

//dialogOverlay.addEventListener("click", hideModal());