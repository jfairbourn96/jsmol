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
  script: "load ../PDB/BeH2.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true; set showMultipleBonds OFF;",
  debug: false
};



// Adds initWindow() as the window load callback.
window.addEventListener("load", initWindow);

// Function that initializes all of the options in the html and properly associates
// each option with a molecule.
function initWindow(){
  var moleculeSelect = document.getElementById("configuration");
  
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
    option_15: document.createElement("option"),
  }
  
  // assign each option a corresponding molecule
  options.option_01.molecule = molecules.BeH2;
  options.option_02.molecule = molecules.CO2;
  options.option_03.molecule = molecules.N2;
  options.option_04.molecule = molecules.BH3;
  options.option_05.molecule = molecules.SO2;
  options.option_06.molecule = molecules.CH4;
  options.option_07.molecule = molecules.NH3;
  options.option_08.molecule = molecules.H2O;
  options.option_09.molecule = molecules.PF5;
  options.option_10.molecule = molecules.SF4;
  options.option_11.molecule = molecules.ClF3;
  options.option_12.molecule = molecules.XeF2;
  options.option_13.molecule = molecules.SF6;
  options.option_14.molecule = molecules.IF5;
  options.option_15.molecule = molecules.XeF4;
  
  // give each option an appropriate label
  options.option_01.label = "BeH2";
  options.option_02.label = "CO2";
  options.option_03.label = "N2";
  options.option_04.label = "BH3";
  options.option_05.label = "SO2";
  options.option_06.label = "CH4";
  options.option_07.label = "NH3";
  options.option_08.label = "H2O";
  options.option_09.label = "PF5";
  options.option_10.label = "SF4";
  options.option_11.label = "ClF3";
  options.option_12.label = "XeF2";
  options.option_13.label = "SF6";
  options.option_14.label = "IF5";
  options.option_15.label = "XeF4";
  
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
  moleculeSelect.add(options.option_15);
  
  // IMPORTANT: Set an option as the default selected choice
  let urlArg = getURLMol();

  if (urlArg in options) {
    options[urlArg].selected = "selected";
  } else {
    options.option_01.selected = "selected";
  }
  
  loadNew();
};

// Function that checks the url for a mol option argument
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
  // let colorString = `select *; color purple; select atomno=${molecule.center_atomno}; color white;`

  // Hide the lone pair checkbox if there are no lone pairs
  if (molecule.nonbonded === 0) {
    document.getElementById("co_lone_pair").disabled = true;
  } else {
    document.getElementById("co_lone_pair").disabled = false;
  }
  

  // Change the title, formula, and notes displayed.
  document.getElementById("name").innerHTML = molecule.formula_html;
  document.getElementById('description').innerHTML = molecule.description_html;
  document.getElementById("info_name").innerHTML = molecule.formula_html;

  // Unchecks every check box.
  getBox("mt_ballstick").checked = true;
  getBox("spin").checked = false;
  massUncheck();

  // Hide unusable commands.
  molecule.commands.LP ? getBox("co_lone_pair").hidden = false : getBox("co_lone_pair").hidden = true; 
  molecule.commands.IS ? getBox("co_isosurface").hidden = false : getBox("co_isosurface").hidden = true; 
  molecule.commands.PC ? getBox("co_partial_charge").hidden = false : getBox("co_partial_charge").hidden = true; 
  molecule.commands.BA ? getBox("co_bond_angle").hidden = false : getBox("co_bond_angle").hidden = true; 
  molecule.commands.ACA ? getBox("co_aca_bond_angle").hidden = false : getBox("co_aca_bond_angle").hidden = true; 
  molecule.commands.ACE ? getBox("co_ace_bond_angle").hidden = false : getBox("co_ace_bond_angle").hidden = true; 
  molecule.commands.ECE ? getBox("co_ece_bond_angle").hidden = false : getBox("co_ece_bond_angle").hidden = true; 
  molecule.commands.ECEN ? getBox("co_ecen_bond_angle").hidden = false : getBox("co_ecen_bond_angle").hidden = true; 
  molecule.commands.ECEF ? getBox("co_ecef_bond_angle").hidden = false : getBox("co_ecef_bond_angle").hidden = true; 
  
  Jmol.script(main, loadString);

  if(molecule === molecules.XeF2) Jmol.script(main, "hide atomno=4;");
}

function getBox(id) {
  return document.getElementById(id);
}

function massUncheck() {
  getBox("lone_pair").checked = false;
  getBox("isosurface").checked = false;
  getBox("partial_charge").checked = false;
  getBox("e_geometry").checked = false;
  getBox("m_geometry").checked = false;
  getBox("bond_angle").checked = false;
  getBox("aca_bond_angle").checked = false;
  getBox("ace_bond_angle").checked = false;
  getBox("ece_bond_angle").checked = false;
  getBox("ecen_bond_angle").checked = false;
  getBox("ecef_bond_angle").checked = false;
}

function getCurrentMolecule(){
  moleculeSelect = document.getElementById("configuration");
  return moleculeSelect.options[moleculeSelect.selectedIndex].molecule;
}

function toggleSpin() {
  if (getBox('spin').checked) {
    Jmol.script(main, 'spin on;');
  } else {
    Jmol.script(main, 'spin off;');
  }
}

function toggleLonePair() {
  if (getBox('lone_pair').checked) {
    getBox('isosurface').checked = false;
    getBox('partial_charge').checked = false;
    Jmol.script(main, 'isosurface OFF;');
    Jmol.script(main, 'lcaoCartoon off');
    Jmol.script(main, getCurrentMolecule().commands.LP);
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

function toggleEGeometry() {
  getBox('m_geometry').checked = false;
  Jmol.script(main, 'draw OFF; color {atomno<4} OPAQUE;');    
  if (getBox('e_geometry').checked) {
    Jmol.script(main, getCurrentMolecule().commands.EG);
  }
}

function toggleMGeometry() {
  getBox('e_geometry').checked = false;
  Jmol.script(main, 'draw OFF; color {atomno<4} OPAQUE;');    
  if (getBox('m_geometry').checked) {
    Jmol.script(main, getCurrentMolecule().commands.MG);
  }
}

function toggleIsosurface() {
  getBox('partial_charge').checked = false;
  if (getBox('isosurface').checked) {
    Jmol.script(main, 'isosurface off');
    Jmol.script(main, 'lcaoCartoon off');
    Jmol.script(main, 'isosurface vdw; isosurface translucent;');
    getBox('lone_pair').checked = false;
  } else {
    Jmol.script(main, 'select *; isosurface off;');
  }
}

function togglePartialCharges() {
  Jmol.script(main, 'isosurface off');
  Jmol.script(main, 'lcaoCartoon off');
  getBox('lone_pair').checked = false;
  getBox('isosurface').checked = false;
  if (getBox('partial_charge').checked) {
    Jmol.script(main, getCurrentMolecule().commands.PC);
  }
}

function toggleBondAngle() {
  getBox('aca_bond_angle').checked = false;
  getBox('ace_bond_angle').checked = false;
  getBox('ece_bond_angle').checked = false;
  getBox('ecef_bond_angle').checked = false;
  getBox('ecen_bond_angle').checked = false;
  if (getBox('bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.BA);
  } else {
    Jmol.script(main, 'measure off');
  }
}

function toggleACABondAngle() {
  Jmol.script(main, "measure off;");
  getBox('ace_bond_angle').checked = false;
  getBox('ece_bond_angle').checked = false;
  getBox('ecef_bond_angle').checked = false;
  getBox('ecen_bond_angle').checked = false;
  if (getBox('aca_bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.ACA);
  } else {
    Jmol.script(main, 'measure off');
  }
}

function toggleACEBondAngle() {
  Jmol.script(main, "measure off;");
  getBox('aca_bond_angle').checked = false;
  getBox('ece_bond_angle').checked = false;
  getBox('ecef_bond_angle').checked = false;
  getBox('ecen_bond_angle').checked = false;
  if (getBox('ace_bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.ACE);
  } else {
    Jmol.script(main, 'measure off');
  }
}

function toggleECEBondAngle() {
  Jmol.script(main, "measure off;");
  getBox('aca_bond_angle').checked = false;
  getBox('ace_bond_angle').checked = false;
  getBox('ecef_bond_angle').checked = false;
  getBox('ecen_bond_angle').checked = false;
  if (getBox('ece_bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.ECE);
  } else {
    Jmol.script(main, 'measure off');
  }
}

function toggleECENBondAngle() {
  Jmol.script(main, "measure off;");
  getBox('aca_bond_angle').checked = false;
  getBox('ace_bond_angle').checked = false;
  getBox('ece_bond_angle').checked = false;
  getBox('ecef_bond_angle').checked = false;
  if (getBox('ecen_bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.ECEN);
  } else {
    Jmol.script(main, 'measure off');
  }
}
function toggleECEFBondAngle() {
  Jmol.script(main, "measure off;");
  getBox('aca_bond_angle').checked = false;
  getBox('ace_bond_angle').checked = false;
  getBox('ece_bond_angle').checked = false;
  getBox('ecen_bond_angle').checked = false;
  if (getBox('ecef_bond_angle').checked) {
    Jmol.script(main, getCurrentMolecule().commands.ECEF);
  } else {
    Jmol.script(main, 'measure off');
  }
}




