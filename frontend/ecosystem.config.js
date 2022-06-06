const prod = process.argv.includes('production')

module.exports = {
  apps: [
    {
      name: 'site',
      exec_mode: 'cluster',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: (prod ? 'start ' : '') + '--config-file ./src/site/nuxt.config.js -H 127.0.0.1 -p 20001',
      instances: 2,
      autorestart: true,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        watch: false,
      },
      env_development: {
        NODE_ENV: 'development',
        watch: true,
      },
    },
  ],
}
