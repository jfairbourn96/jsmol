// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
/* MOLECULES
Mol   pdb 
BeH2  +    
CO2   +   partial charges
N2    +
BH3   +
SO2   +   lone pair, isosurface
CH4   +   bond angle, isosurface, tetrahedron
NH3   +   lone pair, isosurface, partial charges, bond angle
H20   +   lone pair, isosurface, partial charges, bond angle
PF5   +   isosurface, a-c-e + e-c-e bond angle
SF4   +   lone pair, isosurface, a-c-e + a-c-a + e-c-e bond angle
ClF3  +   lone pair, isosurface, a-c-e + a-c-a bond angle
XeF2  +   lone pair, isosurface, a-c-a bond angle
SF6   +   isosurface, bond angle
IF5   +   lone pair, e-c-e nearest/furthest + a-c-e bond angle
XeF4  -   lone pair, isosurface, e-c-e furthest/nearest bond angle

e_domains: 2,
bonded: 1,
nonbonded: 1,
e_geometry: "linear",
m_geometry: "linear",
path: "../PDB/vsepr_02_N2.mol",
formula: "N<sub>2</sub>",
center_atomno: 2,
lone_pair_command: "select *; lcaoCartoon ON; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE spb;"
*/

let molecules = {
  BeH2: {
    e_domains: 2,
    bonded: 2,
    nonbonded: 0,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/BeH2.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  CO2: {
    e_domains: 2,
    bonded: 2,
    nonbonded: 0,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/CO2.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  N2: {
    e_domains: 2,
    bonded: 1,
    nonbonded: 1,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/vsepr_02_N2.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  BH3: {
    e_domains: 3,
    bonded: 3,
    nonbonded: 0,
    e_geometry: "trigonal planar",
    m_geometry: "trigonal planar",
    path: "../PDB/BH3.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  SO2: {
    e_domains: 3,
    bonded: 2,
    nonbonded: 1,
    e_geometry: "trigonal planar",
    m_geometry: "bent",
    path: "../PDB/SO2.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  CH4: {
    e_domains: 4,
    bonded: 4,
    nonbonded: 0,
    e_geometry: "tetrahedral",
    m_geometry: "tetrahedral",
    path: "../PDB/vsepr_05_CH4.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  NH3: {
    e_domains: 4,
    bonded: 3,
    nonbonded: 1,
    e_geometry: "tetrahedral",
    m_geometry: "trigonal pyramidal",
    path: "../PDB/NH3opt.xyz",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  H2O: {
    e_domains: 4,
    bonded: 2,
    nonbonded: 2,
    e_geometry: "tetrahedral",
    m_geometry: "bent",
    path: "../PDB/vsepr_07_H2O.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  PF5: {
    e_domains: 5,
    bonded: 5,
    nonbonded: 0,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "trigonal bipyramidal",
    path: "../PDB/PF5.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  SF4: {
    e_domains: 5,
    bonded: 4,
    nonbonded: 1,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "see saw",
    path: "../PDB/vsepr_09_SF4.pdb",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  ClF3: {
    e_domains: 5,
    bonded: 3,
    nonbonded: 2,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "T shaped",
    path: "../PDB/vsepr_10_ClF3.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  XeF2: {    
    e_domains: 5,
    bonded: 2,
    nonbonded: 3,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "linear",
    path: "../PDB/vsepr_10_ClF3.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  SF6: {
    e_domains: 6,
    bonded: 6,
    nonbonded: 0,
    e_geometry: "octahedral",
    m_geometry: "octahedral",
    path: "../PDB/vsepr_12_SF6.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  IF5: {
    e_domains: 6,
    bonded: 5,
    nonbonded: 1,
    e_geometry: "octahedral",
    m_geometry: "square pyramidal",
    path: "../PDB/IF5.mol",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  XeF4: {
    e_domains: 6,
    bonded: 4,
    nonbonded: 2,
    e_geometry: "octahedral",
    m_geometry: "square planar",
    path: "../PDB/vsepr_14_ICl4.xyz",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
}