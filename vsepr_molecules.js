var vsepr_01 = {
	e_domains: 2, 
	bonded: 2, 
	nonbonded: 0,
	e_geometry: "linear", 
	m_geometry: "linear", 
	path: "PDB/vsepr_01_BeCl2.mol",
	formula: "BeCl2",
	lone_pair_command: ""
};

var vsepr_02 = {
	e_domains: 2,
	bonded: 1,
	nonbonded: 1,
	e_geometry: "linear",
	m_geometry: "linear",
	path: "PDB/vsepr_02_N2.mol",
	formula: "N2",
	lone_pair_command: "select *; lcaoCartoon ON; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE spb;"
};

var vsepr_03 = {
	e_domains: 3,
	bonded: 3,
	nonbonded: 0,
	e_geometry: "trigonal planar",
	m_geometry: "trigonal planar",
	path: "PDB/vsepr_03_BF3.mol",
	formula: "BF3",
	lone_pair_command: ""
};

var vsepr_04 = {
	e_domains: 3,
	bonded: 2,
	nonbonded: 1,
	e_geometry: "trigonal planar",
	m_geometry: "bent",
	path: "PDB/vsepr_04_O3.mol",
	formula: "O3",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp2c;"
};

var vsepr_05 = {
	e_domains: 4,
	bonded: 4,
	nonbonded: 0,
	e_geometry: "tetrahedral",
	m_geometry: "tetrahedral",
	path: "PDB/vsepr_05_CH4.mol",
	formula: "CH4",
	lone_pair_command: ""
};

var vsepr_06 = {
	e_domains: 4,
	bonded: 3,
	nonbonded: 1,
	e_geometry: "tetrahedral",
	m_geometry: "trigonal pyramidal",
	path: "PDB/vsepr_06_H3O.mol",
	formula: "H3O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d;"
};

var vsepr_07 = {
	e_domains: 4,
	bonded: 2,
	nonbonded: 2,
	e_geometry: "tetrahedral",
	m_geometry: "bent",
	path: "PDB/vsepr_07_H2O.mol",
	formula: "H2O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.3 COLOR TRANSLUCENT [31,240,31] CREATE sp3c; lcaoCartoon CREATE sp3d;"
	
};

var vsepr_08 = {
	e_domains: 5,
	bonded: 5,
	nonbonded: 0,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "trigonal bipyramidal",
	path: "PDB/vsepr_08_PCl5.mol",
	formula: "PCl5",
	lone_pair_command: ""
};

var vsepr_09 = {
	e_domains: 5,
	bonded: 4,
	nonbonded: 1,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "see saw",
	path: "PDB/vsepr_09_SF4.pdb",
	formula: "SF4",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3de;"
};

var vsepr_10 = {
	e_domains: 5,
	bonded: 3,
	nonbonded: 2,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_10_ClF3.mol",
	formula: "ClF3",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd;"
};

var vsepr_11 = {
	e_domains: 5,
	bonded: 2,
	nonbonded: 3,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_11_XeF2.mol",
	formula: "XeF2"
};

var vsepr_12 = {
	e_domains: 6,
	bonded: 6,
	nonbonded: 0,
	e_geometry: "octahedral",
	m_geometry: "octahedral",
	path: "PDB/vsepr_12_SF6.mol",
	formula: "SF6",
	lone_pair_command: ""
};

var vsepr_13 = {
	e_domains: 6,
	bonded: 5,
	nonbonded: 1,
	e_geometry: "octahedral",
	m_geometry: "square pyramidal",
	path: "PDB/vsepr_13_BrF5.mol",
	formula: "BrF5",
	lone_pair_command: "lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f;"
};

var vsepr_14 = {
	e_domains: 6,
	bonded: 4,
	nonbonded: 2,
	e_geometry: "octahedral",
	m_geometry: "square planar",
	path: "PDB/vsepr_14_ICl4.xyz",
	formula: "ICl4",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f; lcaoCartoon CREATE sp3d2e;"
};