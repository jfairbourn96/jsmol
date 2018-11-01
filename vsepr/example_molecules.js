// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.

/* MOLECULES

Mol   special commands
=================================== 
BeH2      
CO2   partial charges
N2    
BH3   
SO2   lone pair, isosurface
CH4   bond angle, isosurface, tetrahedron
NH3   lone pair, isosurface, partial charges, bond angle
H20   lone pair, isosurface, partial charges, bond angle
PF5   isosurface, a-c-e + e-c-e bond angle
SF4   lone pair, isosurface, a-c-e + a-c-a + e-c-e bond angle
ClF3  lone pair, isosurface, a-c-e + a-c-a bond angle
XeF2  lone pair, isosurface, a-c-a bond angle
SF6   isosurface, bond angle
IF5   lone pair, e-c-e nearest/furthest + a-c-e bond angle
XeF4  lone pair, isosurface, e-c-e furthest/nearest bond angle

Command Legend (+ denotes always displayed):
============================================
  + BG:   Background Color
  + MT:   Model Type
  + SP:   Spin
    LP:   Lone Pair
    IS:   Isosurface
    PC:   Partial Charges
    BA:   Single bond angle around when all bond angles are identical around central atom.
  + EG:   Electron Geometry
  + MG:   Molecular Geometry
    ACA:  Bond angle around Axial-Central-Axial atoms
    ACE:  Bond angle around Axial-Central-Equatorial atoms
    ECE:  Bond angle around Equatorial-Central-Equatorial atoms
    ECEN: ECE angle around nearest atoms
    ECEF: ECE angle around furthest atoms
*/

let molecules = {
  BeH2: {
    e_domains: 2,
    bonded: 2,
    nonbonded: 0,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/BeH2.mol",
    formula_html: "BeH<sub>2</sub>",
    description_html: 
    `
    <h4>Structure of beryllium dihydride, BeH<sub>2</sub>.</h4> 
    <p>There are two bonded domains on Be and no lone pairs, giving linear electron-domain and molecular geometries.</p>
    <img src="../jpegs/BeH2 chemdraw.gif" width="98" height="20" alt=""/>
    `,
    commands: {},
  },
  CO2: {
    e_domains: 2,
    bonded: 2,
    nonbonded: 0,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/CO2.mol",
    formula_html: "CO<sub>2</sub>",
    description_html: `
    <h4>Structure of carbon dioxide, CO<sub>2</sub>.</h4>
    <p>There are two bonded domains (each bonded domain contains a double bond) on the central C and no lone pairs, giving linear electron-domain and molecular geometries, and sp orbital hybridization, about C.</p>
    <p>Note that there are two lone pairs on each terminal O, although they are not shown in this jmol rendering. The electron-domain geometries of the terminal oxygens are trigonal planar, and the orbital hybridization on each O is thus sp2.</p>
    <img src="../jpegs/CO2.gif" alt="CO2 structure" width="180" height="85">
    `,
    commands: {
      PC: true
    }
  },
  N2: {
    e_domains: 2,
    bonded: 1,
    nonbonded: 1,
    e_geometry: "linear",
    m_geometry: "linear",
    path: "../PDB/vsepr_02_N2.mol",
    formula_html: "N<sub>2</sub>",
    description_html: `
    <h4>Structure of dinitrogen N<sub>2</sub></h4> 
    <p>There is one bonded domain (the bonded domain consists of a triple bond) and one lone pair on each N, giving a linear electron-domain geometry and sp orbital hybridization.</p>
    <p>Note that the lone pairs on N<sub>2</sub> are not shown in the jmol rendering. </p>
		<img src="../jpegs/N2 chemdraw.gif" width="135" height="30" alt=""/>
    <p>The triple bond is formed from one sigma and two pi bonds. The pi bonds are formed from overlap of nonhybridized p orbitals that are oriented perpendicular to each other (e.g. <font color="#00FF00">p<sub>y</sub> </font>and <font color="#0000FF">p<sub>z</sub></font>, shown in <font color="#00FF00">green</font> and<font color="#0000FF"> blue</font>) </p> 
    <img src="../jpegs/N2 p orbitals chemdraw.gif" width="135" height="101" alt=""/>     
    `,
    commands: {}
  },
  BH3: {
    e_domains: 3,
    bonded: 3,
    nonbonded: 0,
    e_geometry: "trigonal planar",
    m_geometry: "trigonal planar",
    path: "../PDB/BH3.mol",
    formula_html: "BH<sub>3</sub>",
    description_html: `
    <h4>Structure of boron trihydride, BH<sub>3</sub></h4> 
    <p>There are three bonded domains on B and no lone pairs, giving trigonal planar electron-domain and molecular geometries.</p>
	  <img src="../jpegs/BH3 chemdraw with angles.gif" width="119" height="89" alt=""/>
    `,
    commands: {}
  },
  SO2: {
    e_domains: 3,
    bonded: 2,
    nonbonded: 1,
    e_geometry: "trigonal planar",
    m_geometry: "bent",
    path: "../PDB/SO2.mol",
    formula_html: "SO<sub>2</sub>",
    description_html: `
    <h4>Structure of sulfur dioxide, SO<sub>2</sub>.</h4>
    <p>SO<sub>2</sub> contains 2 bonded and one nonbonded electron domains, giving a trigonal planar e- domain geometry and a bent molecular geometry (AX<sub>2</sub>E). The bond angle is smaller (119 rather than 120 degrees) than  in a perfect trigonal plane due to lone pairs spreading out more in space than bonded pairs. A cartoon model of the electron density of the lone pair of electrons, represented by a translucent green spheroid, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of that lone pair dictates the molecular geometry.</p>
	  <img src="../jpegs/SO2 chemdraw.gif" width="78" height="88" alt=""/> 
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp2c;",
      IS: true
    }
  },
  CH4: {
    e_domains: 4,
    bonded: 4,
    nonbonded: 0,
    e_geometry: "tetrahedral",
    m_geometry: "tetrahedral",
    path: "../PDB/vsepr_05_CH4.mol",
    formula_html: "CH<sub>4</sub>",
    description_html: `
    <h4>Structure of methane, CH<sub>4</sub></h4> 
    <p>There are four bonded domains on C and no lone pairs, giving tetrahedral electron-domain and molecular geometries (AX<sub>4</sub>). </p>
	  <img src="../jpegs/CH4 chemdraw with bond angle.gif" width="124" height="88" alt=""/>
	  <p>Shown below is a tetrahedron, the geometric shape for which the term "tetrahedral geometry" was derived. A tetrahedron has four triangular faces formed by connecting lines between the four unique sets of three vertex corners. A molecule with four electron domains on a central atom can be superimposed on a tetrahedron, with the central atom (C) occupying the center of the tetrahedron, and the electron pairs pointing towards the four vertex corners.  </p>
		<p>(put tetrahedron JSmol here)</p>
    `,
    commands: {
      BA: true,
      IS: true,
    }
  },
  NH3: {
    e_domains: 4,
    bonded: 3,
    nonbonded: 1,
    e_geometry: "tetrahedral",
    m_geometry: "trigonal pyramidal",
    path: "../PDB/NH3opt.xyz",
    formula_html: "NH<sub>3</sub>",
    description_html: `
    <h4>Structure of ammonia, NH<sub>3</sub></h4>
    <p>NH<sub>3</sub> contains 3 bonded and one nonbonded electron domains, giving a tetrahedral e<sup>-</sup> domain geometry and a trigonal pyramidal molecular geometry. (AX<sub>3</sub>E). The H-N-H bond angles (107 degrees) are less than in a perfect tetrahedron because the lone pair electrons spread out more in space than bonded electron pairs, compressing the bond angle. A cartoon model of the electron density of the lone pair of electrons, represented by a translucent green spheroid, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of that lone pair dictates the molecular geometry.</p>
	  <img src="../jpegs/NH3 with angles.gif" width="176" height="240" alt=""/>
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 1.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d;",
      IS: true,
      PC: true,
      BA: true,
    }
  },
  H2O: {
    e_domains: 4,
    bonded: 2,
    nonbonded: 2,
    e_geometry: "tetrahedral",
    m_geometry: "bent",
    path: "../PDB/vsepr_07_H2O.mol",
    formula_html: "H<sub>2</sub>O",
    description_html: `
    <h4>Structure of water, H<sub>2</sub>O.</h4> 
    <p>H<sub>2</sub>O contains 2 bonded and two nonbonded electron domains, giving a tetrahedral e<sup>-</sup> domain geometry and a bentmolecular geometry. (AX<sub>2</sub>E<sub>2</sub>). The H-O-H bond angle (104 degrees) is less than in a perfect tetrahedron because the lone pair electrons spread out more in space than bonded electron pairs, compressing the bond angle. A cartoon model of the electron density of the lone pairs of electrons, represented by translucent purple spheroids, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of the lone pairs dictates the molecular geometry. </p>
		<img src="../jpegs/H2O.gif" width="94" height="91" alt=""/>
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 1.3 COLOR TRANSLUCENT [31,240,31] CREATE sp3c; lcaoCartoon CREATE sp3d;",
      IS: true,
      PC: true,
      BA: true
    }
  },
  PF5: {
    e_domains: 5,
    bonded: 5,
    nonbonded: 0,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "trigonal bipyramidal",
    path: "../PDB/PF5.mol",
    formula_html: "PF<sub>5</sub>",
    description_html: `
    <h4>Structure of phosphorus pentafluoride, PF<sub>5</sub></h4> 
    <p>There are five bonded domains on P and no lone pairs, giving trigonal pyramidal electron-domain and molecular geometries. </p>
		<img src="../jpegs/PF5 chemdraw with angles.gif" width="95" height="99" alt=""/>
		<p>Shown below is a trigonal bipyramid, the geometric shape for which the term "trigonal bipyramidal geometry" was derived. There are three &quot;equatorial&quot; electron domains which lie in the same  plane as the central P atom, forming a trigonal planar structure. The two remaining electron domains are at 90 degree angles to the trigonal plane. By themselves, the two axial electron domains and the central atom form a linear structure, with the two axial electron domains separated by a 180 degree angle.</p>
		<p>(put trigonal bipyramid JSmol here)</p>
    `,
    commands: {
      IS: true,
      ACE: true,
      ECE: true
    }
  },
  SF4: {
    e_domains: 5,
    bonded: 4,
    nonbonded: 1,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "see saw",
    path: "../PDB/vsepr_09_SF4.pdb",
    formula_html: "SF<sub>4</sub>",
    description_html: `
    <h4>Structure of sulfur tetrafluoride, SF<sub>4</sub></h4>
    <p>SF<sub>4</sub> contains four bonded and one nonbonded electron domains, giving a trigonal bipyramidal e<sup>-</sup> domain geometry and a see saw molecular geometry (AX<sub>4</sub>E). The bond angles are  compressed relative to those in a perfect trigonal bipyramid due to the lone pair spreading out more in space than bonded pairs. The lone pair is in an equatorial rather than axial position because that arrangment minimizes electrostatic repulsion with the bonded electron domains. </p>
		<p>A cartoon model of the electron density of the lone pair of electrons, represented by a translucent green spheroid, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of that lone pair dictates the molecular geometry.</p>
	  <img src="../jpegs/sf4 chemdraw.gif" width="94" height="99" alt=""/>
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3de;",
      IS: true,
      ACE: true,
      ACA: true,
      ECE: true
    }
  },
  ClF3: {
    e_domains: 5,
    bonded: 3,
    nonbonded: 2,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "T shaped",
    path: "../PDB/vsepr_10_ClF3.mol",
    formula_html: "ClF<sub>3</sub>",
    description_html: `
    <h4>Structure of chlorine trifluoride ClF<sub>3</sub></h4>
    <p>ClF<sub>3</sub> contains three bonded and two nonbonded electron domains, giving a trigonal bipyramidal e<sup>-</sup> domain geometry and a T-shaped molecular geometry (AX<sub>3</sub>E<sub>2</sub>). The bond angles are  compressed relative to those in a perfect trigonal bipyramid due to lone pairs spreading out more in space than bonded pairs. </p>
		<p>A cartoon model of the electron density of the lone pairs of electrons, represented by translucent green spheroids, can be toggled on and off. Note that the shape of the spheroids does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of that lone pair dictates the molecular geometry. Turn the &quot;isosurface&quot; on to see the actual electron density for this molecule.</p>
	  <img src="../jpegs/ClF3 chemdraw.gif" width="94" height="100" alt=""/>
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd;",
      IS: true,
      ACE: true,
      ACA: true
    }
  },
  XeF2: {    
    e_domains: 5,
    bonded: 2,
    nonbonded: 3,
    e_geometry: "trigonal bipyramidal",
    m_geometry: "linear",
    path: "../PDB/vsepr_10_ClF3.mol",
    formula_html: "XeF<sub>2</sub>",
    description_html: `
    <h4>Structure of xenon difluoride, XeF<sub>2</sub></h4>
    <p>XeF<sub>2</sub> contains two bonded and three nonbonded electron domains, giving a trigonal bipyramidal e<sup>-</sup> domain geometry and a linear molecular geometry (AX<sub>2</sub>E<sub>3</sub>).</p>
		<p>A cartoon model of the electron density of the lone pairs of electrons, represented by translucent green spheroids, can be toggled on and off. Note that the shape of the spheroids does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of the lone pairs dictates the molecular geometry. Turn the &quot;isosurface&quot; on to see the actual electron density for this molecule.</p>
	  <img src="../jpegs/XeF2 chemdraw.gif" width="94" height="100" alt=""/>
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 2 COLOR TRANSLUCENT [31,240,31] CREATE sp3de; lcaoCartoon CREATE sp3dd; lcaoCartoon CREATE sp3dc;",
      IS: true,
      ACA: true
    }
  },
  SF6: {
    e_domains: 6,
    bonded: 6,
    nonbonded: 0,
    e_geometry: "octahedral",
    m_geometry: "octahedral",
    path: "../PDB/vsepr_12_SF6.mol",
    formula_html: "SF<sub>6</sub>",
    description_html: `
    <h4>Structure of sulfur hexafluoride, SF<sub>6</sub></h4>
    <p>There are six bonded domains on S and no lone pairs, giving octahedral electron-domain and molecular geometries. </p>
		<img src="../jpegs/SF6 chemdraw.gif" width="95" height="99" alt=""/></p>
		<p>Shown below is an <strong>octahedron</strong>, the geometric shape for which the term "octahedral geometry" was derived. The central atom lies at the center of the molecule. Four atoms lie in a common &quot;square plane&quot;, forming 90 degree bond angles with the central atom. Two atoms are at 90 degree angles to the atoms lying in the square plane. With the &quot;spin&quot; on, note how the molecule rotates about an axis where four terminal atoms are in an equatorial positions, while the two additional atoms are at axial positions. However, there are no &quot;true&quot; equatorial and axial positions since the molecule is completely symmetrical. Turn the &quot;spin&quot; off and rotate the molecule into the plane of the screen to see how atoms you perceive as equatorial and axial swap positions. Then turn the spin on again to see the molecule rotate about the new &quot;equator&quot;. Note how all the bond angles between nearest atoms are 90 degrees. Contrast this with a molcule with trigonal bipyramidal geometry, where the axial and equatorial positions are fixed, and two distinct bond angles are present between nearest atoms (120 and 90 degrees).
    <h2>put octahedron jsmol here</h2>
    `,
    commands: {
      IS: true,
      BA: true
    }
  },
  IF5: {
    e_domains: 6,
    bonded: 5,
    nonbonded: 1,
    e_geometry: "octahedral",
    m_geometry: "square pyramidal",
    path: "../PDB/IF5.mol",
    formula_html: "IF<sub>5</sub>",
    description_html: `
    <h4>Structure of iodine pentafluoride, IF<sub>5</sub></h4>
    <p>IF<sub>5</sub> contains five bonded and one nonbonded electron domains, giving an octahedral e<sup>-</sup> domain geometry and a square pyramidal molecular geometry (AX<sub>5</sub>E). The bond angles are  compressed relative to those in a perfect octahedron due to the lone pair spreading out more in space than bonded pairs. Use the check boxes to measure the bond angles for nearest and furthest atoms attached to the central atom in the equatorial plane, and for the bond angle between the single remaining axial atom, central atom, and an equatorial atom. For comparison, in a molecule with the formula AX<sub>6</sub>, the bond angles are 90 and 180 degrees for nearest and furthest atoms.</p>
		<p>A cartoon model of the electron density of the lone pair of electrons, represented by a translucent green spheroid, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of that lone pair dictates the molecular geometry.			  </p>
		<img src="../jpegs/IF5 chemdraw.gif" width="95" height="100" alt=""/>
    `,
    commands: {
      LP: "lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f;",
      ECEN: true,
      ECEF: true,
      ACE: true,
    }
  },
  XeF4: {
    e_domains: 6,
    bonded: 4,
    nonbonded: 2,
    e_geometry: "octahedral",
    m_geometry: "square planar",
    path: "../PDB/vsepr_14_ICl4.xyz",
    formula_html: "XeF<sub>4</sub>",
    description_html: `
    <h4>Structure of xenon tetrafluoride, XeF<sub>4</sub></h4>
    <p>XeF<sub>4</sub> contains four bonded and two nonbonded electron domains, giving an octahedral e<sup>-</sup> domain geometry and a square planar molecular geometry (AX<sub>4</sub>E<sub>2</sub>). </p>
		<p>A cartoon model of the electron density of the lone pairs of electrons, represented by translucent green spheroids, can be toggled on and off. Note that the shape of the spheroid does not represent the actual electron density of the lone pair, but allows you to visualize how the presence of the lone pairs dictates the molecular geometry.			  </p>
		<p>Click &quot;show isosurface&quot; to see the actual electron density for the molecule.</p>  
    `,
    commands: {
      LP: "select atomno=1; lcaoCartoon SCALE 2.5 COLOR TRANSLUCENT [31,240,31] CREATE sp3d2f; lcaoCartoon CREATE sp3d2e;",
      IS: true,
      ECEF: true,
      ECEN: true
    }
  },
}