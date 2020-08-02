module.exports = {
  apps: [
    {
      name: 'NHWEB',
      cwd: '/srv/www/nhweb',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3014,
      },
    },
  ],
};
