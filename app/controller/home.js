const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    this.ctx.body = {status: true}
  }
}

module.exports = HomeController
