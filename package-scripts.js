const { series, rimraf, mkdirp } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps build',
    clean: {
      description: 'Deletes the various generated folders',
      script: rimraf('./lib'),
    },
    build: {
      description: 'Builds the library assets',
      default: series('npx nps clean', mkdirp('lib'), `npx babel src --out-dir ./lib`),
      watch: 'nodemon --watch src --exec npx nps deploy',
    },
  },
};
