const { newEnforcer } = require('casbin')

module.exports = {
  middleware: [ 'user', 'authz' ],
  authz: {
    enable: true,
    newEnforcer: async () => {
      // load the casbin model and policy from files, database is also supported.
      const enforcer = await newEnforcer('examples/authz_model.conf', 'examples/authz_policy.csv')
      return enforcer
    }
  }
}

module.exports.keys = '123456'
