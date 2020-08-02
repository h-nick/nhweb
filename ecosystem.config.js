/* This is just a template for the actual ecosystem file. */

module.exports = {
  apps: [
    {
      name: '.',
      cwd: '.',
      script: 'npx next start -p .',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
