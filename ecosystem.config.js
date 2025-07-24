module.exports = {
  apps: [
    {
      name: 'myapp-dev',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'myapp-prod',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
