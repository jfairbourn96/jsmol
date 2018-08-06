//====================================================
//= 14 molecules loaded in vsepr_configurations.html =
//====================================================
var vsepr_01 = {
	e_domains: 2, 
	bonded: 2, 
	nonbonded: 0,
	e_geometry: "linear", 
	m_geometry: "linear", 
	path: "PDB/vsepr_01_BeCl2.mol",
	formula: "BeCl<sub>2</sub>",
	lone_pair_command: ""
};

var vsepr_02 = {
	e_domains: 2,
	bonded: 1,
	nonbonded: 1,
	e_geometry: "linear",
	m_geometry: "linear",
	path: "PDB/vsepr_02_N2.mol",
	formula: "N<sub>2</sub>",
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
	lone_pair_command: ""
};

var vsepr_04 = {
	e_domains: 3,
	bonded: 2,
	nonbonded: 1,
	e_geometry: "trigonal planar",
	m_geometry: "bent",
	path: "PDB/vsepr_04_O3.mol",
	formula: "O<sub>3</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp2c;"
};

var vsepr_05 = {
	e_domains: 4,
	bonded: 4,
	nonbonded: 0,
	e_geometry: "tetrahedral",
	m_geometry: "tetrahedral",
	path: "PDB/vsepr_05_CH4.mol",
	formula: "CH<sub>4</sub>",
	lone_pair_command: ""
};

var vsepr_06 = {
	e_domains: 4,
	bonded: 3,
	nonbonded: 1,
	e_geometry: "tetrahedral",
	m_geometry: "trigonal pyramidal",
	path: "PDB/vsepr_06_H3O.mol",
	formula: "H<sub>3</sub>O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d;"
};

var vsepr_07 = {
	e_domains: 4,
	bonded: 2,
	nonbonded: 2,
	e_geometry: "tetrahedral",
	m_geometry: "bent",
	path: "PDB/vsepr_07_H2O.mol",
	formula: "H<sub>2</sub>O",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 1.3 COLOR TRANSLUCENT [31,240,31] CREATE sp3c; lcaoCartoon CREATE sp3d;"
	
};

var vsepr_08 = {
	e_domains: 5,
	bonded: 5,
	nonbonded: 0,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "trigonal bipyramidal",
	path: "PDB/vsepr_08_PCl5.mol",
	formula: "PCl<sub>5</sub>",
	lone_pair_command: ""
};

var vsepr_09 = {
	e_domains: 5,
	bonded: 4,
	nonbonded: 1,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "see saw",
	path: "PDB/vsepr_09_SF4.pdb",
	formula: "SF<sub>4</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3de;"
};

var vsepr_10 = {
	e_domains: 5,
	bonded: 3,
	nonbonded: 2,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_10_ClF3.mol",
	formula: "ClF<sub>3</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd;"
};

var vsepr_11 = {
	e_domains: 5,
	bonded: 2,
	nonbonded: 3,
	e_geometry: "trigonal bipyramidal",
	m_geometry: "t-shaped",
	path: "PDB/vsepr_11_XeF2.mol",
	formula: "XeF<sub>2</sub>"
};

var vsepr_12 = {
	e_domains: 6,
	bonded: 6,
	nonbonded: 0,
	e_geometry: "octahedral",
	m_geometry: "octahedral",
	path: "PDB/vsepr_12_SF6.mol",
	formula: "SF<sub>6</sub>",
	lone_pair_command: ""
};

var vsepr_13 = {
	e_domains: 6,
	bonded: 5,
	nonbonded: 1,
	e_geometry: "octahedral",
	m_geometry: "square pyramidal",
	path: "PDB/vsepr_13_BrF5.mol",
	formula: "BrF<sub>5</sub>",
	lone_pair_command: "lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f;"
};

var vsepr_14 = {
	e_domains: 6,
	bonded: 4,
	nonbonded: 2,
	e_geometry: "octahedral",
	m_geometry: "square planar",
	path: "PDB/vsepr_14_ICl4.xyz",
	formula: "ICl<sub>4</sub>",
	lone_pair_command: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f; lcaoCartoon CREATE sp3d2e;"
};

//================================================
//= 6 molecules loaded in carbon_allotropes.html =
//================================================

var buckyball = {
	title: "Buckyball",
	path: "PDB/buckyball.pdb",
	description: "<h4>Structure of C60, buckminsterfullerene (buckyball)</h4> \
	<p>Buckminster fullerene is an allotrope of carbon containing exactly 60 C atoms bonded together in a cage-like ring structure. The C atoms are bonded in such a fashion that they form 20 hexagonal and 12 pentagonal interconnected units.</p>" +
	"<p>Each C atom is sp<sup>2</sup>-hybridized and contains 3 sigma bonds and one pi bond, where the pi (double) bonds may be represented as shown in the figure below. In reality, the pi bonds are resonance-delocalized over the entire molecule.</p>" +
	"<p>Each hexagonal and pentagonal unit is planar. Since the ring atoms are wrapped into a spherical structure, some bond angles for the C atoms must be compressed below the optimal 120 degrees for sp<sup>2</sup>-hybridized C atoms, inducing angle strain.</p>" +
	"<img src=\"jpegs/Buckminsterfullerene.svg.png\"> "
};

var diamond = {
	title: "Diamond",
	path: "PDB/diamond.pdb",
	description: "<h4>Structure of diamond</h4>" +
	"<p>Diamond is a covalent network allotrope of carbon where each C atom is sp<sup>3</sup>-hybridized and is bonded to 4 additional C atoms in a large 3-dimensional lattice. All of the bond angles in the lattice are 109.5 degrees. Diamond is formed from the rearrangement of chemical bonds when the standard state form of carbon (graphite) is subjected to high pressures. Like graphite and graphene, diamond must be represented by an empirical formula (C) since there is not a defined number of atoms. </p>"
};

var graphite = {
	title: "Graphite",
	path: "PDB/graphite.pdb",
	description: "<h4>Structure of graphite</h4>" +
	"<p>Graphite is the standard state form of the element carbon, meaning it is the form most stable at 25 degrees C and normal atmospheric pressure. Graphite is a covalent network of carbon atoms, where each individual carbon atom is bonded to 3 additional carbon atoms. The orbital hybridization of the C atoms is sp<sup>2</sup>, resulting in 120 degree bond angles and trigonal planar geometry. All of the bonded C atoms lie in a single plane (layer, or sheet) which contains repeating 6-membered rings of C atoms (a hexagonal lattice). Each C atom contains a single electron in a nonhybridized p orbital that is delocalised over the ring systems of the layer. Individual layers of graphite, called graphene, stack on top of each other to form the 3-dimensional structure shown in the model at right. Only a small portion of each sheet is shown in this model; in reality the individual sheets will contain a much larger number of C atoms. There is no true molecular formula for graphite as the number of carbon atoms in layers is not a fixed number, and it is accordingly represented by the empirical formula (C). </p>" +
	"<p>Graphite is an electrical conductor due to the presence of the electrons in the nonhybridized p orbitals. </p>"
};

var graphene_1 = {
	title: "Graphene",
	path: "PDB/graphene.pdb",
	description: "<h4>Structure of graphene</h4>" +
	"<p>Graphene is a covalent network of carbon atoms arranged in a monolayer, where each individual carbon atom is bonded to 3 additional carbon atoms. The orbital hybridization of the C atoms is sp<sup>2</sup>, resulting in 120 degree bond angles and trigonal planar geometry. All of the bonded C atoms lie in a single plane (layer, or sheet) which contains repeating 6-membered rings of C atoms (a hexagonal lattice). Each C atom contains a single electron in a nonhybridized p orbital that is delocalised over the ring systems of the layer. Sheets of graphene stacked on top of each other form the allotrope graphite. Only a small portion of a graphene sheet is shown in this model; in reality the individual sheets will contain a much larger number of C atoms. There is no true molecular formula for graphene as the number of carbon atoms in layers is not a fixed number, and it is accordingly represented by the empirical formula C.</p>" +
	"<p>Graphene is an electrical conductor due to the presence of the electrons in the nonhybridized p orbitals. It is also aromatic due to delocalized pi bonds on the sp<sup>2</sup>-hybridized C atoms.</p>"
};

var graphene_2 = {
	title: "Graphene - 2 Sheets",
	path: "PDB/graphene-2.pdb",
	description: graphene_1.description
};

var nanotube = {
	title: "Nanotube",
	path: "PDB/nanotube.pdb",
	description: "<h4>Structure of a carbon nanotube</h4>" +
	"<p>A carbon nanotube is an allotrope of carbon where the C atoms form interconnected six-membered rings that wrap together to adopt a cylindrical structure. A nanotube is basically a sheet of graphene of defined size that has been rolled together and connected. Each C atom is sp<sup>2</sup>-hybridized and contains 3 sigma bonds and one pi bond, where the pi (double) bonds are resonance-delocalized. The wrapping of the graphene sheet, where all bond angles are 120 degrees, into a tube induces angle strain as the bonds are compressed to allow the tube structure to form. Nanotubes can be synthesized with various length-to-diameter ratios. A representatve nanotube is shown in the molecular model at right.</p>" +
	"<img src=\"jpegs/nanotube_animation.gif\">"
};