const { series, rimraf, mkdirp } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps production',
    clean: {
      description: 'Deletes the various generated folders',
      script: rimraf('./lib'),
    },
    deploy: {
      description: 'Builds the assets',
      default: series('npx nps deploy.build'),
      watch: 'nodemon --watch src --exec npx nps deploy',
      build: series('npx nps clean', 'npx nps deploy.lib'),
      lib: series(mkdirp('lib'), `npx babel src --out-dir ./lib`),
    },
  },
};
