const { config } = require('dotenv');

config({ path: `./env` });

const IS_PROD = process.env.NODE_ENV === `production`;

const appConfig = {
  name: `nas_explorer`,
  script: `./express/dist/server.js`,
};

if (!IS_PROD) Object.assign(appConfig, { watch: [`./express/dist/server.js`] });

module.exports = {
  apps: [appConfig],
};
