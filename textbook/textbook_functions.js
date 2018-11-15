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
  script: "load ../PDB/ethene.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true; set showMultipleBonds OFF;",
  debug: false
};

// Adds initWindow() as the window load callback.
window.addEventListener("load", initWindow);

// Function that initializes all of the options in the html and properly associates
// each option with a molecule.
function initWindow(){
  let moleculeSelect = document.getElementById("configuration");
  
  // TODO: Remove this once the VSEPR descriptions are provided.
  document.getElementById("description").hidden = true;
  
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
  }

  // assign each option a corresponding molecule
  options.option_01.molecule = molecules.water;
  options.option_02.molecule = molecules.ammonia;
  options.option_03.molecule = molecules.salt_lattice;
  options.option_04.molecule = molecules.acetic_acid;
  options.option_05.molecule = molecules.sulfuric_acid;
  options.option_06.molecule = molecules.ethanol;
  options.option_07.molecule = molecules.dimethyl_ether;
  options.option_08.molecule = molecules.hydrogen_sulfate;
  options.option_09.molecule = molecules.sulfate;

  // give each option an appropriate label
  options.option_01.innerHTML = options.option_01.molecule.name;
  options.option_02.innerHTML = options.option_02.molecule.name;
  options.option_03.innerHTML = options.option_03.molecule.name;
  options.option_04.innerHTML = options.option_04.molecule.name;
  options.option_05.innerHTML = options.option_05.molecule.name;
  options.option_06.innerHTML = options.option_06.molecule.name;
  options.option_07.innerHTML = options.option_07.molecule.name;
  options.option_08.innerHTML = options.option_08.molecule.name;
  options.option_09.innerHTML = options.option_09.molecule.name;
  
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
  let loadString = `load  ${molecule.path}; select *; spacefill 0.3; `;
  
  // Set defaults
  document.getElementById('description').innerHTML = molecule.description;
  document.getElementById("info_name").innerHTML = molecule.formula;
  document.getElementById("name").innerHTML = molecule.name;
  document.getElementById("mt_ballstick").checked = true;
  document.getElementById("co_spin").checked = false;
  document.getElementById("isosurface").checked = false;
  document.getElementById("partial_charge").checked = false;
  
  if(molecule.name === "Water" || molecule.name === "NaCl Lattice"){
    getBox("isosurface").disabled = true;
    getBox("partial_charge").disabled = true;
  } else {
    getBox("isosurface").disabled = false;
    getBox("partial_charge").disabled = false;
  }

  Jmol.script(main, loadString);
}

function getCurrentMolecule(){
  moleculeSelect = document.getElementById("configuration");
  return moleculeSelect.options[moleculeSelect.selectedIndex].molecule;
}

function getBox(id) {
  return document.getElementById(id);
}

function toggleSpin() {
  if (document.getElementById('co_spin').checked) {
    Jmol.script(main, 'spin on;');
  } else {
    Jmol.script(main, 'spin off;');
  }
}

function ballAndStick() {
  Jmol.script(main, 'select *; wireframe 0.15; spacefill 30%');
}

function spacefill() {
  Jmol.script(main, 'select *; spacefill 100%;');
}

function stick() {
  Jmol.script(main, 'select *; wireframe 0.2; spacefill off;');
}

function changeColor(color) {
  var colorString = 'background ' + color + ';';
  Jmol.script(main, colorString);
}

function toggleIsosurface() {
  getBox('partial_charge').checked = false;
  if (getBox('isosurface').checked) {
    Jmol.script(main, 'isosurface off');
    Jmol.script(main, 'lcaoCartoon off');
    Jmol.script(main, 'isosurface vdw; isosurface translucent;');
  } else {
    Jmol.script(main, 'select *; isosurface off;');
  }
}

function togglePartialCharges() {
  Jmol.script(main, 'isosurface off');
  Jmol.script(main, 'lcaoCartoon off');
  getBox('isosurface').checked = false;
  if (getBox('partial_charge').checked) {
    Jmol.script(main, 'isosurface off; if ({atomno < 20}.partialcharge == 0){calculate partialcharge}; isosurface vdw map mep; isosurface translucent;')
  }
}