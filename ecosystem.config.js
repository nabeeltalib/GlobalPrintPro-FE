export default {
  apps: [
    {
      name: "your-app-name",
      script: "dist/index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
