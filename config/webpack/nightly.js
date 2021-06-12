process.env.NODE_ENV = process.env.NODE_ENV || 'nightly'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()