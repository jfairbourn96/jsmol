// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
// This script defines the functions and everything else referenced in states_of_water.html

// Adds initWindow() as the window load callback.
window.addEventListener("load", initWindow);

// Info variable passed to the JSmol in the html.
let info = {
  color: "#FFFFFF", 
  height: 500,      
  width: 500,
  j2sPath: "../jsmol/j2s",
  // Change the initial molecule here.
  script: "load ../PDB/h2o.pdb; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;",
  debug: false
};

function initWindow() {
  var moleculeSelect = document.getElementById('configuration');
  
  // initialize the 3 option elements
  var option01 = document.createElement("option");
  var option02 = document.createElement("option");
  var option03 = document.createElement("option");

  // assign each element a molecule object from water_molecule.js
  option01.molecule = h2o_single;
  option02.molecule = h2o_liquid;
  option03.molecule = h2o_ice;
  
  // label each element
  option01.label = "Gas: Single Molecule";			
  option02.label = "Liquid: Water";
  option03.label = "Solid: Ice";
  
  // link each option to the select element
  moleculeSelect.add(option01);
  moleculeSelect.add(option02);
  moleculeSelect.add(option03);
  
  // IMPORTANT: Make sure one of the options is selected, or the loadNew() function call will not work.
  option01.selected = "selected";
  
  loadNew();
}

// Function for returning the correct JS object required by the select element.
function getCurrentMolecule(){
  moleculeSelect = document.getElementById("configuration");
  return moleculeSelect.options[moleculeSelect.selectedIndex].molecule;
}

// Resets the inputs and loads the appropriate pdb file.
function loadNew(pdbFile) {
  var molecule = getCurrentMolecule();
  
  var loadString = "load " + molecule.path + ";";
  
  if (molecule === h2o_single) {
    document.getElementById('co_bondAngle').disabled = false;
    document.getElementById('co_isosurface').disabled = false;
    document.getElementById('co_partialCharge').disabled = false;
  } else {
    document.getElementById('co_bondAngle').disabled = true;
    document.getElementById('co_isosurface').disabled = true;
    document.getElementById('co_partialCharge').disabled = true;
  }
  
  document.getElementById('description').innerHTML = molecule.description;
  document.getElementById('co_bondAngle').checked = false;
  document.getElementById('co_isosurface').checked = false;
  document.getElementById('co_partialCharge').checked = false;
  document.getElementById("mt_ballstick").checked = true;
  document.getElementById("co_spin").checked = false;
  
  Jmol.script(main, loadString);
}

// Toggles the Isosurface command for showing the electron density of the molecule.
function toggleIsosurface() {
  document.getElementById('co_partialCharge').checked = false;
  document.getElementById('co_isosurface').checked ?
    Jmol.script(main, 'isosurface vdw; isosurface translucent;') :
    Jmol.script(main, 'select *; isosurface off;');
}

function togglePartialCharge() {
  document.getElementById('co_isosurface').checked = false;
  document.getElementById('co_partialCharge').checked ?
    Jmol.script(main, 'isosurface off; if ({atomno < 10}.partialcharge == 0){calculate partialcharge}; isosurface vdw map mep; isosurface translucent;') :
    Jmol.script(main, 'isosurface off;');
}

function toggleBondAngle() {
  document.getElementById('co_bondAngle').checked ?
    Jmol.script(main, 'measure ({1}) ({0}) ({2});') :
    Jmol.script(main, 'measure off');
}

function toggleSpin() {
  document.getElementById('co_spin').checked ?
    Jmol.script(main, 'spin on;') :
    Jmol.script(main, 'spin off;');
}

function ballAndStick() {
  Jmol.script(main, 'wireframe 0.15; spacefill 20%');
}

function spacefill() {
  Jmol.script(main, 'spacefill 100%;');
}

function stick() {
  Jmol.script(main, 'wireframe 0.2; spacefill off;');
}

function changeColor(color) {
  let colorString = 'background ' + color + ';';
  Jmol.script(main, colorString);
}