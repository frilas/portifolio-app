const defaultConfig = require('kcd-scripts/dist/config/jest.config')

const transform = {
  ...defaultConfig.transform,
  '^.+\\.svg$': '<rootDir>/tests/svgTransform.js',
}

const config = {
  ...defaultConfig,
  transform,
}

module.exports = config
