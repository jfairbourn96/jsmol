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
    e_domains: 0,
    bonded: 0,
    nonbonded: 0,
    e_geometry: "",
    m_geometry: "",
    path: "",
    formula_html: "",
    description_html: "",
    lone_pair_command: ""
  },
  CO2: {},
  N2: {},
  BH3: {},
  SO2: {},
  CH4: {},
  NH3: {},
  H2O: {},
  PF5: {},
  SF4: {},
  ClF3: {},
  XeF2: {},
  SF6: {},
  IF5: {},
  XeF4: {},
}