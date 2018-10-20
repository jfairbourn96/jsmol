//====================================================
//= 14 molecules loaded in vsepr_configurations.html =
//====================================================
// TODO: Add an orientation command string
// TODO: Call both commands on loadNew();

var vsepr_01 = {
	e_domains: 2, 
	bonded: 2, 
	nonbonded: 0,
	e_geometry: "linear", 
	m_geometry: "linear", 
	path: "PDB/vsepr_01_BeCl2.mol",
	formula: "BeCl<sub>2</sub>",
	lone_pair_command: "",
	center_atomno: 2,
	color_string: "select *; color purple; select atomno=2; color white;"
};

var vsepr_02 = {
	e_domains: 2,
	bonded: 1,
	nonbonded: 1,
	e_geometry: "linear",
	m_geometry: "linear",
	path: "PDB/vsepr_02_N2.mol",
	formula: "N<sub>2</sub>",
	center_atomno: 2,
	lone_pair_command: "select *; lcaoCartoon ON; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE spb;"
};

var vsepr_03 = {
	e_domains: 3,
	bonded: 3,
	nonbonded: 0,
	e_geometry: "trigonal planar",
	m_geometry: "trigonal planar",
	path: "PDB/vsepr_03_BF3.mol",
	formula: "BF<sub>3</sub>",
	lone_pair_command: "",
	center_atomno: 2,
};

var vsepr_04 = {
	e_domains: 3,
	bonded: 2,
	nonbonded: 1,
	e_geometry: "trigonal planar",
	m_geometry: "bent",
	path: "PDB/vsepr_04_O3.mol",
	formula: "O<sub>3</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp2c;",
	center_atomno: 1,
};

var vsepr_05 = {
	e_domains: 4,
	bonded: 4,
	nonbonded: 0,
	e_geometry: "tetrahedral",
	m_geometry: "tetrahedral",
	path: "PDB/vsepr_05_CH4.mol",
	formula: "CH<sub>4</sub>",
	lone_pair_command: "",
	center_atomno: 1,
};

var vsepr_06 = {
	e_domains: 4,
	bonded: 3,
	nonbonded: 1,
	e_geometry: "tetrahedral",
	m_geometry: "trigonal pyramidal",
	path: "PDB/vsepr_06_H3O.mol",
	formula: "H<sub>3</sub>O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d;",
	center_atomno: 1,
};

var vsepr_07 = {
	e_domains: 4,
	bonded: 2,
	nonbonded: 2,
	e_geometry: "tetrahedral",
	m_geometry: "bent",
	path: "PDB/vsepr_07_H2O.mol",
	formula: "H<sub>2</sub>O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.3 COLOR TRANSLUCENT [31,240,31] CREATE sp3c; lcaoCartoon CREATE sp3d;",
	center_atomno: 1,
};

var vsepr_08 = {
	e_domains: 5,
	bonded: 5,
	nonbonded: 0,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "trigonal bipyramidal",
	path: "PDB/vsepr_08_PCl5.mol",
	formula: "PCl<sub>5</sub>",
	lone_pair_command: "",
	center_atomno: 2,
};

var vsepr_09 = {
	e_domains: 5,
	bonded: 4,
	nonbonded: 1,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "see saw",
	path: "PDB/vsepr_09_SF4.pdb",
	formula: "SF<sub>4</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3de;",
	center_atomno: 1,
};

var vsepr_10 = {
	e_domains: 5,
	bonded: 3,
	nonbonded: 2,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_10_ClF3.mol",
	formula: "ClF<sub>3</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd;",
	center_atomno: 1,
};

// TODO: Change this to the XeF2 xyz file or whatever it is.
var vsepr_11 = {
	e_domains: 5,
	bonded: 2,
	nonbonded: 3,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_10_ClF3.mol; hide atomno=4",
	formula: "XeF<sub>2</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd; lcaoCartoon CREATE sp3dc;",
	center_atomno: 1,
};

var vsepr_12 = {
	e_domains: 6,
	bonded: 6,
	nonbonded: 0,
	e_geometry: "octahedral",
	m_geometry: "octahedral",
	path: "PDB/vsepr_12_SF6.mol",
	formula: "SF<sub>6</sub>",
	lone_pair_command: "",
	center_atomno: 1,
};

var vsepr_13 = {
	e_domains: 6,
	bonded: 5,
	nonbonded: 1,
	e_geometry: "octahedral",
	m_geometry: "square pyramidal",
	path: "PDB/vsepr_13_BrF5.mol",
	formula: "BrF<sub>5</sub>",
	lone_pair_command: "lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f;",
	center_atomno: 1,
};

var vsepr_14 = {
	e_domains: 6,
	bonded: 4,
	nonbonded: 2,
	e_geometry: "octahedral",
	m_geometry: "square planar",
	path: "PDB/vsepr_14_ICl4.xyz",
	formula: "ICl<sub>4</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f; lcaoCartoon CREATE sp3d2e;",
	center_atomno: 1,
};

vsepr_01.description = "<h4>Title 1 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_02.description = "<h4>Title 2 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_03.description = "<h4>Title 3 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_04.description = "<h4>Title 4 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_05.description = "<h4>Title 5 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_06.description = "<h4>Title 6 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_07.description = "<h4>Title 7 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_08.description = "<h4>Title 8 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_09.description = "<h4>Title 9 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_10.description = "<h4>Title 10 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_11.description = "<h4>Title 11 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_12.description = "<h4>Title 12 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_13.description = "<h4>Title 13 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"
vsepr_14.description = "<h4>Title 14 Here</h4><p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph 2: Suspendisse eget lorem accumsan, vestibulum lorem fringilla, blandit ipsum. Curabitur volutpat, erat pulvinar bibendum placerat, sem lacus ornare ligula, id consequat ligula velit eu sem. Aliquam gravida turpis sed ex condimentum fermentum. Nunc ut volutpat lectus. Pellentesque vitae lacinia quam. Praesent fermentum euismod luctus. Sed at libero ac augue consequat porta in et felis. Fusce ultricies imperdiet elit. In vel leo pulvinar, tempus purus sit amet, lobortis velit. Donec et dolor a libero malesuada laoreet.</p>'"