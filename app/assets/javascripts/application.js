/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {

  // add code here

})

// JQuery for the body part diagram view
function showOtherInjuries () {
  $(".body-list-panel").hide();
  $("#other-injuries-panel").show();
}
function showTorso () {
  $(".body-list-panel").hide();
  $("#torso-panel").show();
}
function showFace () {
  $(".body-list-panel").hide();
  $("#face-panel").show();
}
function showEyes () {
  $(".body-list-panel").hide();
  $("#eyes-panel").show();
}
function showHeadNeck () {
  $(".body-list-panel").hide();
  $("#head-neck-panel").show();
}
function showArms () {
  $(".body-list-panel").hide();
  $("#arms-panel").show();
}
function showLegs () {
  $(".body-list-panel").hide();
  $("#legs-panel").show();
}
function showFeet () {
  $(".body-list-panel").hide();
  $("#feet-panel").show();
}
function showHands () {
  $(".body-list-panel").hide();
  $("#hands-panel").show();
}