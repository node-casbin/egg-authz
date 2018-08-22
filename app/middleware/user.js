module.exports = options => {
  return async function (ctx, next) {
    const username = ctx.get('Authorization') || 'anonymous'
    ctx.user = {username}
    await next()
  }
}
