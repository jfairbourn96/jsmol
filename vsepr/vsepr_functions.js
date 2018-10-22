// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
// This script defines the functions and everything else referenced in vsepr_configurations.html

// info object passed to the Jmol in vsepr_configurations.html
let info = {
  color: "#FFFFFF", 
  height: 500,      
  width: 500,
  j2sPath: "../jsmol/j2s",
  // Change the initial molecule here.
  script: "load ../PDB/vsepr_01_BeCl2.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true; set showMultipleBonds OFF;",
  debug: false
};

// Adds initWindow() as the window load callback.
window.addEventListener("load", initWindow);

// Function that initializes all of the options in the html and properly associates
// each option with a molecule.
function initWindow(){
  var moleculeSelect = document.getElementById("configuration");
  
  // initialize all 14 options within the select
  var option01 = document.createElement("option");
  var option02 = document.createElement("option");
  var option03 = document.createElement("option");
  var option04 = document.createElement("option");
  var option05 = document.createElement("option");
  var option06 = document.createElement("option");
  var option07 = document.createElement("option");
  var option08 = document.createElement("option");
  var option09 = document.createElement("option");
  var option10 = document.createElement("option");
  var option11 = document.createElement("option");
  var option12 = document.createElement("option");
  var option13 = document.createElement("option");
  var option14 = document.createElement("option");
  
  // assign each option a corresponding molecule
  option01.molecule = vsepr_01;
  option02.molecule = vsepr_02;
  option03.molecule = vsepr_03;
  option04.molecule = vsepr_04;
  option05.molecule = vsepr_05;
  option06.molecule = vsepr_06;
  option07.molecule = vsepr_07;
  option08.molecule = vsepr_08;
  option09.molecule = vsepr_09;
  option10.molecule = vsepr_10;
  option11.molecule = vsepr_11;
  option12.molecule = vsepr_12;
  option13.molecule = vsepr_13;
  option14.molecule = vsepr_14;
  
  // give each option an appropriate label
  option01.label = "Linear";
  option02.label = "Linear (2)";
  option03.label = "Trigonal Planar";
  option04.label = "Trigonal Planar - Bent";
  option05.label = "Tetrahedral";
  option06.label = "Tetrahedral - Trigonal Pyramidal";
  option07.label = "Tetrahedral - Bent";
  option08.label = "Trigonal Bipyramidal";
  option09.label = "Trigonal Bipyramidal - Seesaw";
  option10.label = "Trigonal Bipyramidal - T-shaped";
  option11.label = "Trigonal Bipyramidal - Linear";
  option12.label = "Octahedral";
  option13.label = "Octahedral - Square Pyramidal";
  option14.label = "Octahedral - Square Planar";
  
  // link each option to the <select> element
  moleculeSelect.add(option01);
  moleculeSelect.add(option02);
  moleculeSelect.add(option03);
  moleculeSelect.add(option04);
  moleculeSelect.add(option05);
  moleculeSelect.add(option06);
  moleculeSelect.add(option07);
  moleculeSelect.add(option08);
  moleculeSelect.add(option09);
  moleculeSelect.add(option10);
  moleculeSelect.add(option11);
  moleculeSelect.add(option12);
  moleculeSelect.add(option13);
  moleculeSelect.add(option14);
  
  // IMPORTANT: Set an option as the default selected choice
  option01.selected = "selected";
  
  loadNew();
};

// Resets defaults and loads the appropriate molecule.
function loadNew() {
  // load the appropriate molecule
  let molecule = getCurrentMolecule();
  let loadString = `load  ${molecule.path}; select *; spacefill 0.4; `;
  let colorString = `select *; color purple; select atomno=${molecule.center_atomno}; color white;`

  // Hide the lone pair checkbox if there are no lone pairs
  if (molecule.nonbonded === 0) {
    document.getElementById("co_lonePair").disabled = true;
  } else {
    document.getElementById("co_lonePair").disabled = false;
  }
  
  // Set defaults
  document.getElementById('description').innerHTML = molecule.description;
  document.getElementById("info_name").innerHTML = molecule.formula;
  document.getElementById("mt_ballstick").checked = true;
  document.getElementById("co_spin").checked = false;
  document.getElementById("co_lonePair").checked = false;
  
  Jmol.script(main, loadString+colorString);

  if(molecule === vsepr_11) Jmol.script(main, "hide atomno=4;");
}

function getCurrentMolecule(){
  moleculeSelect = document.getElementById("configuration");
  return moleculeSelect.options[moleculeSelect.selectedIndex].molecule;
}

function toggleSpin() {
  if (document.getElementById('co_spin').checked) {
    Jmol.script(main, 'spin on;');
  } else {
    Jmol.script(main, 'spin off;');
  }
}

function toggleLonePair() {
  if (document.getElementById('co_lonePair').checked) {
    Jmol.script(main, getCurrentMolecule().lone_pair_command);
  } else {
    Jmol.script(main, 'lcaoCartoon OFF; isosurface OFF;');
  }
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
  var colorString = 'background ' + color + ';';
  Jmol.script(main, colorString);
}