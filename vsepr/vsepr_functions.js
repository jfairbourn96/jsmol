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
  let moleculeSelect = document.getElementById("configuration");
  
  // initialize all 14 options within the select
  let options = {
    option_01: document.createElement("option"),
    option_02: document.createElement("option"),
    option_03: document.createElement("option"),
    option_04: document.createElement("option"),
    option_05: document.createElement("option"),
    option_06: document.createElement("option"),
    option_07: document.createElement("option"),
    option_08: document.createElement("option"),
    option_09: document.createElement("option"),
    option_10: document.createElement("option"),
    option_11: document.createElement("option"),
    option_12: document.createElement("option"),
    option_13: document.createElement("option"),
    option_14: document.createElement("option"),
  }

  // assign each option a corresponding molecule
  options.option_01.molecule = molecules.vsepr_01;
  options.option_02.molecule = molecules.vsepr_02;
  options.option_03.molecule = molecules.vsepr_03;
  options.option_04.molecule = molecules.vsepr_04;
  options.option_05.molecule = molecules.vsepr_05;
  options.option_06.molecule = molecules.vsepr_06;
  options.option_07.molecule = molecules.vsepr_07;
  options.option_08.molecule = molecules.vsepr_08;
  options.option_09.molecule = molecules.vsepr_09;
  options.option_10.molecule = molecules.vsepr_10;
  options.option_11.molecule = molecules.vsepr_11;
  options.option_12.molecule = molecules.vsepr_12;
  options.option_13.molecule = molecules.vsepr_13;
  options.option_14.molecule = molecules.vsepr_14;
  
  // give each option an appropriate label
  options.option_01.label = "Linear";
  options.option_02.label = "Linear (2)";
  options.option_03.label = "Trigonal Planar";
  options.option_04.label = "Trigonal Planar - Bent";
  options.option_05.label = "Tetrahedral";
  options.option_06.label = "Tetrahedral - Trigonal Pyramidal";
  options.option_07.label = "Tetrahedral - Bent";
  options.option_08.label = "Trigonal Bipyramidal";
  options.option_09.label = "Trigonal Bipyramidal - Seesaw";
  options.option_10.label = "Trigonal Bipyramidal - T-shaped";
  options.option_11.label = "Trigonal Bipyramidal - Linear";
  options.option_12.label = "Octahedral";
  options.option_13.label = "Octahedral - Square Pyramidal";
  options.option_14.label = "Octahedral - Square Planar";
  
  // link each option to the <select> element
  moleculeSelect.add(options.option_01);
  moleculeSelect.add(options.option_02);
  moleculeSelect.add(options.option_03);
  moleculeSelect.add(options.option_04);
  moleculeSelect.add(options.option_05);
  moleculeSelect.add(options.option_06);
  moleculeSelect.add(options.option_07);
  moleculeSelect.add(options.option_08);
  moleculeSelect.add(options.option_09);
  moleculeSelect.add(options.option_10);
  moleculeSelect.add(options.option_11);
  moleculeSelect.add(options.option_12);
  moleculeSelect.add(options.option_13);
  moleculeSelect.add(options.option_14);

  // IMPORTANT: Set an option as the default selected choice
  let urlArg = getURLMol();

  if (urlArg in options){
    options[urlArg].selected = "selected";
  } else {
    options.option_01.selected = "selected";
  }

  loadNew();
};

function getURLMol() {
  return decodeURI(
    (new RegExp('mol=' + '(.+?)(&|$)').exec(location.search) || [null])[1]
  );
}

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

  if(molecule === molecules.vsepr_11) Jmol.script(main, "hide atomno=4;");
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