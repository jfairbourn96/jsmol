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
  }

  // assign each option a corresponding molecule
  options.option_01.molecule = molecules.ethylene;
  options.option_02.molecule = molecules.acetylene;
  options.option_03.molecule = molecules.carbon_monoxide;
  options.option_04.molecule = molecules.formaldehyde;

  // give each option an appropriate label
  options.option_01.innerHTML = options.option_01.molecule.name;
  options.option_02.innerHTML = options.option_02.molecule.name;
  options.option_03.innerHTML = options.option_03.molecule.name;
  options.option_04.innerHTML = options.option_04.molecule.name;
  
  // link each option to the <select> element
  moleculeSelect.add(options.option_01);
  moleculeSelect.add(options.option_02);
  moleculeSelect.add(options.option_03);
  moleculeSelect.add(options.option_04);

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
  
  Jmol.script(main, loadString);
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