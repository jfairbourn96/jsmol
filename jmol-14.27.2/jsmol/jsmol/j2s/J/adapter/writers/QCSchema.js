Clazz.declarePackage ("J.adapter.writers");
Clazz.load (["JV.Viewer"], "J.adapter.writers.QCSchema", ["java.lang.Float"], function () {
c$ = Clazz.declareType (J.adapter.writers, "QCSchema");
c$.getUnitConversion = Clazz.defineMethod (c$, "getUnitConversion", 
function (units, toUnits) {
if (units.equalsIgnoreCase (toUnits)) return 1;
try {
var toAUDesired = Float.parseFloat (J.adapter.writers.QCSchema.getFactorToAU (toUnits));
var toAUActual = Float.parseFloat (J.adapter.writers.QCSchema.getFactorToAU (units));
if (Float.isNaN (toAUActual)) return 1;
return toAUActual / toAUDesired;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return 1;
} else {
throw e;
}
}
}, "~S,~S");
c$.getFactorToAU = Clazz.defineMethod (c$, "getFactorToAU", 
function (units) {
var convFactor = "\"?\"";
units = units.toLowerCase ();
switch ("cm cm^-1 cm-1 angstroms au atomic units fractional bohr hartree ev kj_mol kcal_mol".indexOf (units)) {
case 3:
case 9:
units = "cm-1";
convFactor = "4.5563359e-6";
break;
case 14:
units = "angstroms";
convFactor = "1.88972613";
break;
case 24:
case 27:
units = "au";
convFactor = "1";
break;
case 40:
units = "UNITS_FRACTIONAL";
convFactor = "0";
break;
case 51:
units = "bohr";
convFactor = "1";
break;
case 56:
units = "hartree";
convFactor = "1";
break;
case 64:
units = "ev";
convFactor = "0.03688675765";
break;
case 67:
units = "kcal/mol";
convFactor = "0.00159362549";
break;
case 74:
units = "kj/mol";
convFactor = "0.00038087983";
break;
}
return convFactor;
}, "~S");
c$.getConversionFactorTo = Clazz.defineMethod (c$, "getConversionFactorTo", 
function (unitsFactor, unitsDesired) {
try {
var toAUDesired = Float.parseFloat (J.adapter.writers.QCSchema.getFactorToAU (unitsDesired));
var toAUActual = Float.parseFloat (J.adapter.writers.QCSchema.getFactorToAU (unitsFactor == null ? "au" : unitsFactor.get (0).toString ()));
if (Float.isNaN (toAUActual)) toAUActual = Float.parseFloat (unitsFactor.get (1).toString ());
return toAUActual / toAUDesired;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return NaN;
} else {
throw e;
}
}
}, "JU.Lst,~S");
c$.version = c$.prototype.version = "QCJSON 0-0-0.Jmol_" + JV.Viewer.getJmolVersion ().$replace (' ', '_');
Clazz.defineStatics (c$,
"UNITS_FRACTIONAL", "fractional",
"UNITS_AU", "au",
"TOAU_AU", "1",
"UNITS_ANGSTROMS", "angstroms",
"TOAU_ANGSTROMS", "1.88972613",
"UNITS_BOHR", "bohr",
"TOAU_BOHR", "1",
"UNITS_HARTREE", "hartree",
"TOAU_HARTREE", "1",
"UNITS_EV", "ev",
"TOAU_EV", "0.03688675765",
"UNITS_CM_1", "cm-1",
"TOAU_CM_1", "4.5563359e-6",
"UNITS_KJ_MOL", "kj/mol",
"TOAU_KJ_MOL", "0.00038087983",
"UNITS_KCAL_MOL", "kcal/mol",
"TOAU_KCAL_MOL", "0.00159362549",
"knownUnits", "cm cm^-1 cm-1 angstroms au atomic units fractional bohr hartree ev kj_mol kcal_mol");
});
