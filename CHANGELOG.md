# Change Log

## Version 1.0.0 - 2025/11/27 - ITA 
Genesis. 
 
## Version 1.0.1 - 2025/11/29 - ITA
Added a change log file. Improved README file such that it appears better on Github. 

## Version 1.0.2 - 2025/11/29 - ITA
Added a correct version number. 

## Version 1.0.3 - 2025/11/30 - ITA
- Updated version numbers to the package.
- Improved description of the project in the README file.
- DialogBox.js and DialogBoxProvider.js: Changed the import of 'prop-types' to an explicit non-default prop-types objects.

## Version 1.0.4 - 2025/12/01 - ITA
- NB. The issue addressed in this patch and previous patchs, to do with DialogBox and DialogBoxProvider, only pops up when working with them when consumed from the installed dialogboxpackagejs npm package.
- The issue was resolved in the dialogboxjs package's build process.
- Reverted back to default import of prop-types, as this was not a problem.
