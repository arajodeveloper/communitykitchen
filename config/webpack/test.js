process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
// describe('a component', () => {
// it('does NewFood render without crashing', () => {
//   const div = document.createElement('div')
//   expect(true).toEqual(true)
//   });
// });
