// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  paths: paths => {
    paths.appIndexJs = path.resolve(__dirname, 'client/src/index.tsx');
    paths.appSrc = path.resolve(__dirname, 'client/src');

    return paths;
  }
};
