# USU Chemistry JSmol Development

Repository for files created and used for the development of Chemistry Teaching Materials. Development is focused on molecular visualizing using JSmol embedded within HTML pages. Most materials were created by Justin Fairbourn with Dr. Scott Ensign with assistance from the USU Chemistry Department and the USU Center for Innovative Design and Instruction.

## Getting Started

Simply cloning the project and opening the pages should get everything to load properly. 

### Prerequisites

Works best in most recent version of Chrome, but other than that there are no real dependencies. If looking to use the .jar and other Java files directly, make sure you have the most recent version of Java downloaded here: [Download Java](https://java.com/)

### Installing

For reference, the entire repository can be clone with:

```
$ git clone https://github.com/jfairbourn96/jsmol
```

That's it! Make sure your browser and Java installation are up to date and start changing and configuring the HTML to fit your specific needs. Once cloned, opening `carbon_allotropes.html` should display a page looking like this:

![Screenshot of carbon_allotropes.html properly loaded](./screenshots/readme_example.png)

If things don't look right (i.e. the description panel is blank, the molecule pane displays an error message, or the dropdown menu is blank) ensure that jsmol and the associated .js and .css files are in the proper directory relative to the html.

## Deployment

To deploy any of these materials on your own site, simply copy all relevant files and make sure that the referenced external files (JSmol, .js files, .css, image, etc.) are in the proper working directory relative to the HTML files.

## Built With

* [VSCode](https://code.visualstudio.com/) - IDE for .mol .pdb .js .md files
* [Adobe Dreamweaver](https://www.adobe.com/products/dreamweaver.html) - IDE for .html .js .css files
* [Jmol/JSmol](http://jmol.sourceforge.net/) - Open-Source Java-Based software used for embedded molecule visualization.
* [Pymol](https://pymol.org/2/) - Python-Based software used for molecular animation visualization that's transferred into JSmol.

## Authors

* **Justin Fairbourn**: Most JS,HTML, and CSS work. [jfairbourn96](https://github.com/jfairbourn96)
* **Scott Ensign**: Creation of initial files, continued advising and directing. [Dr. Scott Ensign Ph.D.](http://ensignchemistry.com/)


## Acknowledgments
 - Custom .mol files built using <http://molview.org>.
 - JSmol references:
   - <http://www.chemtube3d.com/orbitalsethene.htm>
   - <http://www.uwosh.edu/faculty_staff/gutow/Orbitals/N/ethylene_VB.shtml>
   - <https://undergrad-ed.chemistry.ohio-state.edu/H-AOs/>
   - <https://chemapps.stolaf.edu/jmol/orbitals/indexJS.html>
   - <https://lampx.tugraz.at/~hadley/ss1/molecules/atoms/AOs.php>
   - <http://www.chem.purdue.edu/jmol/vsepr/cmpall.html>
   - <https://undergrad-ed.chemistry.ohio-state.edu/jmol-viewer/>
