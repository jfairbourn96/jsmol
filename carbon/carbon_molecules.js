//================================================
//= 6 molecules loaded in carbon_allotropes.html =
//================================================
// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.

let buckyball = {
	title: "Buckyball",
	path: "../PDB/buckyball.pdb",
	description: "<h4>Structure of C60, buckminsterfullerene (buckyball)</h4> \
	<p>Buckminster fullerene is an allotrope of carbon containing exactly 60 C atoms bonded together in a cage-like ring structure. The C atoms are bonded in such a fashion that they form 20 hexagonal and 12 pentagonal interconnected units.</p>" +
	"<p>Each C atom is sp<sup>2</sup>-hybridized and contains 3 sigma bonds and one pi bond, where the pi (double) bonds may be represented as shown in the figure below. In reality, the pi bonds are resonance-delocalized over the entire molecule.</p>" +
	"<p>Each hexagonal and pentagonal unit is planar. Since the ring atoms are wrapped into a spherical structure, some bond angles for the C atoms must be compressed below the optimal 120 degrees for sp<sup>2</sup>-hybridized C atoms, inducing angle strain.</p>" +
	"<img src=\"jpegs/Buckminsterfullerene.svg.png\"> "
};

let diamond = {
	title: "Diamond",
	path: "../PDB/diamond.pdb",
	description: "<h4>Structure of diamond</h4>" +
	"<p>Diamond is a covalent network allotrope of carbon where each C atom is sp<sup>3</sup>-hybridized and is bonded to 4 additional C atoms in a large 3-dimensional lattice. All of the bond angles in the lattice are 109.5 degrees. Diamond is formed from the rearrangement of chemical bonds when the standard state form of carbon (graphite) is subjected to high pressures. Like graphite and graphene, diamond must be represented by an empirical formula (C) since there is not a defined number of atoms. </p>"
};

let graphite = {
	title: "Graphite",
	path: "../PDB/graphite.pdb",
	description: "<h4>Structure of graphite</h4>" +
	"<p>Graphite is the standard state form of the element carbon, meaning it is the form most stable at 25 degrees C and normal atmospheric pressure. Graphite is a covalent network of carbon atoms, where each individual carbon atom is bonded to 3 additional carbon atoms. The orbital hybridization of the C atoms is sp<sup>2</sup>, resulting in 120 degree bond angles and trigonal planar geometry. All of the bonded C atoms lie in a single plane (layer, or sheet) which contains repeating 6-membered rings of C atoms (a hexagonal lattice). Each C atom contains a single electron in a nonhybridized p orbital that is delocalised over the ring systems of the layer. Individual layers of graphite, called graphene, stack on top of each other to form the 3-dimensional structure shown in the model at right. Only a small portion of each sheet is shown in this model; in reality the individual sheets will contain a much larger number of C atoms. There is no true molecular formula for graphite as the number of carbon atoms in layers is not a fixed number, and it is accordingly represented by the empirical formula (C). </p>" +
	"<p>Graphite is an electrical conductor due to the presence of the electrons in the nonhybridized p orbitals. </p>"
};

let graphene_1 = {
	title: "Graphene",
	path: "../PDB/graphene.pdb",
	description: "<h4>Structure of graphene</h4>" +
	"<p>Graphene is a covalent network of carbon atoms arranged in a monolayer, where each individual carbon atom is bonded to 3 additional carbon atoms. The orbital hybridization of the C atoms is sp<sup>2</sup>, resulting in 120 degree bond angles and trigonal planar geometry. All of the bonded C atoms lie in a single plane (layer, or sheet) which contains repeating 6-membered rings of C atoms (a hexagonal lattice). Each C atom contains a single electron in a nonhybridized p orbital that is delocalised over the ring systems of the layer. Sheets of graphene stacked on top of each other form the allotrope graphite. Only a small portion of a graphene sheet is shown in this model; in reality the individual sheets will contain a much larger number of C atoms. There is no true molecular formula for graphene as the number of carbon atoms in layers is not a fixed number, and it is accordingly represented by the empirical formula C.</p>" +
	"<p>Graphene is an electrical conductor due to the presence of the electrons in the nonhybridized p orbitals. It is also aromatic due to delocalized pi bonds on the sp<sup>2</sup>-hybridized C atoms.</p>"
};

let graphene_2 = {
	title: "Graphene - 2 Sheets",
	path: "../PDB/graphene-2.pdb",
	description: graphene_1.description
};

let nanotube = {
	title: "Nanotube",
	path: "../PDB/nanotube.pdb",
	description: "<h4>Structure of a carbon nanotube</h4>" +
	"<p>A carbon nanotube is an allotrope of carbon where the C atoms form interconnected six-membered rings that wrap together to adopt a cylindrical structure. A nanotube is basically a sheet of graphene of defined size that has been rolled together and connected. Each C atom is sp<sup>2</sup>-hybridized and contains 3 sigma bonds and one pi bond, where the pi (double) bonds are resonance-delocalized. The wrapping of the graphene sheet, where all bond angles are 120 degrees, into a tube induces angle strain as the bonds are compressed to allow the tube structure to form. Nanotubes can be synthesized with various length-to-diameter ratios. A representatve nanotube is shown in the molecular model at right.</p>" +
	"<img src=\"jpegs/nanotube_animation.gif\">"
};