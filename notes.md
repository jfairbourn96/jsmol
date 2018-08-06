While linebreaks are acceptable within other places in an HTML tag, make sure not to put a linebreak within the code string as in  javascript:Jmol.script(main, '#code#').

i.e.:
```
onclick="javascript:Jmol.script(main,
	'wireframe 0.15; spacefill 20% ');"
```
is okay, but
```
onclick="javascript:Jmol.script(main,
	'wireframe 0.15; 
  spacefill 20% ');">
```
will cause the command to not execute.
<hr>

(Credits for the following notes go to http://earth.callutheran.edu/Academic_Programs/Departments/BioDev/omm/jsmol/scripting/molmast.htm, (C) 2016, Nathan Silva and David Marcey)
## Loading and Positioning
Use default commnds that turn off any previous scripts invoked by other buttons. Recommended:
```javascript
set frank off; // Sets "Jmol" to not be shown in the bottom right.
select all; // Selects all the atoms.
hbonds off; // Turns Hydrogen Bonds off.
spin off; // Sets the molecule to not spin.
wireframe off; // No bonds between atoms will be drawn.
spacefill off; // Tells the atoms not to be rendered as spheres.
trace off; // Turns off the smooth trace curve through control points.
set ambientPercent 40; // 'set ambient' was deprecated.
set specularPower 40; // 'set specpower' was deprecated.
slab off; // Whole molecule will be shown.
ribbons off; // Ribbons will not be displayed.
cartoons off; // Cartoons will not be displayed.
label off; // No labels will be displayed.
monitor off; // No measurements will be displayed.
```
This can then be modified by subsequent commands in the script.

### Rotation/Translation
Translation along X axis moves the molecule left or right. \
Translation along Y axis moves the molecule up or down. \
Translation along Z axis moves the molecule forward or backward (zoom). \
Translation along any axis is expressed with an integer percentage value.
```javascript
translate x -10; // Move left across 10% of the screen.
translate y 10; // Move up across 10% of the screen.
zoom 50; // Zoom out to half the current size.
```

### Loading
`load 'path to the pdb file'` \
So perhaps we can have a server set up that is accessible to the script stuff on a page? Then depending on the input from the user, we can just call `load molecule` and have molecule be assigned/reassigned to a corresponding path.

## Selecting and Labeling
Select command specifies which atoms of a pdb file will be affected by subsequent rendering commands. \
Predefined sets of atoms: all, amino, nucleic, hetero, water/hoh, sheet, backbone, protein, ligand, hetero, helix, sheet, sidechain.

The `define` command can associate a group of atoms under one expression that can be selected later. The format is `define {name of group} {atoms to be grouped}`

The `restrict` command limits the display to atoms specified in the restrict script.

Once atoms are selected, they can be labeled using the `label` command.


TODO:
 <!-- - Create molecule pages for the different states of water (one page for all three). -->
 <!-- - Create molecule pages for the different carbon allotropes. -->
 <!-- - Create a page that takes the dropdown page idea for the VSEPR example but also displays the lobes. -->
 - Orbitals with two different JSmol windows (1st two links in email)
 - Look into displaying JSmol over the page instead of a new page.
 - Look into the utility of the 'set picking' command 