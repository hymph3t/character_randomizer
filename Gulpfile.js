const { src } = require('gulp');
const jsdoc = require('gulp-jsdoc3');

function generateDocs() {
  return src(['README.md', './*/*.js'])
    .pipe(jsdoc({
      opts: {
        template: 'node_modules/ink-docstrap/template',
        destination: 'docs'
      }
    }));
}

exports.generateDocs = generateDocs;
