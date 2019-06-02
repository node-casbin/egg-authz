Egg-Authz 
====
[![NPM version][npm-image]][npm-url]
[![NPM download][download-image]][download-url]
[![codebeat badge](https://codebeat.co/badges/9defa882-898c-4dcb-91a6-7e8f061ccaac)](https://codebeat.co/projects/github-com-node-casbin-egg-authz-master)
[![Build Status](https://travis-ci.org/node-casbin/egg-authz.svg?branch=master)](https://travis-ci.org/node-casbin/egg-authz)
[![Coverage Status](https://coveralls.io/repos/github/node-casbin/egg-authz/badge.svg?branch=master)](https://coveralls.io/github/node-casbin/egg-authz?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/casbin/lobby)

[npm-image]: https://img.shields.io/npm/v/egg-authz.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-authz
[download-image]: https://img.shields.io/npm/dm/egg-authz.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-authz

Egg-Authz is an authorization middleware for [Egg](https://eggjs.org/), it's based on ``Node-Casbin``: [https://github.com/casbin/node-casbin](https://github.com/casbin/node-casbin).

## 1. Installation

```shell
npm install --save egg-authz
```

## 2. Create a file in middleware directory to import the module.

```js
// app/middleware/authz.js
module.exports = require('egg-authz')
```

```js
// config/config.default.js
const casbin = require('casbin')
module.exports = {
  middleware: [ 'authz' ],
  authz: {
    enable: true,
    newEnforcer: async() => {
      // load the casbin model and policy from files, database is also supported.
      const enforcer = await casbin.newEnforcer('authz_model.conf', 'authz_policy.csv')
      return enforcer
    }
  }
}
```

## 3. Enable the middleware in your config files.

## How to control the access

The authorization determines a request based on ``{subject, object, action}``, which means what ``subject`` can perform what ``action`` on what ``object``. In this plugin, the meanings are:

1. ``subject``: the logged-on user name
2. ``object``: the URL path for the web resource like "dataset1/item1"
3. ``action``: HTTP method like GET, POST, PUT, DELETE, or the high-level actions you defined like "read-file", "write-blog"


For how to write authorization policy and other details, please refer to [the Casbin's documentation](https://casbin.org).

## Getting Help

- [Node-Casbin](https://github.com/casbin/node-casbin)

## License

This project is licensed under the [Apache 2.0 license](LICENSE).
