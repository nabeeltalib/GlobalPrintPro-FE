// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "global-print-pro",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
