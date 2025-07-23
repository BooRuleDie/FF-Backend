module.exports = {
  apps: [
    {
      name: 'myapp-dev',
      script: './dist/src/main.js',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'myapp-prod',
      script: './dist/src/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
