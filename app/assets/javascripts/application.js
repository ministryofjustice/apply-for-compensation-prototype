/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {

  // add code here

})

function hidePanels (){
  $("#other-injuries-panel").hide();
  $("#torso-panel").hide();
  $("#legs-panel").hide();  
  $("#arms-panel").hide();
  $("#head-neck-panel").hide();
  $("#eyes-panel").hide();  
  $("#face-panel").hide();
  $("#feet-panel").hide();
  $("#hands-panel").hide();
}

function showOtherInjuries () {
  hidePanels();
  panel = document.getElementById ("other-injuries-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}

function showTorso () {
  hidePanels();
  panel = document.getElementById ("torso-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}

function showFace () {
  hidePanels();
  panel = document.getElementById ("face-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}

function showEyes () {
  hidePanels();
  panel = document.getElementById ("eyes-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}

function showHeadNeck () {
  hidePanels();
  panel = document.getElementById ("head-neck-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}
function showArms () {
  hidePanels();
  panel = document.getElementById ("arms-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}
function showLegs () {
  hidePanels();
  panel = document.getElementById ("legs-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}
function showFeet () {
  hidePanels();
  panel = document.getElementById ("feet-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}
function showHands () {
  hidePanels();
  panel = document.getElementById ("hands-panel");
  panel.style = "display: block; position: absolute; top:230px; left: 700px ;" 
}