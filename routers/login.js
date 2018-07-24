const Router = require('koa-router')
const router = new Router()


router.get('/login', async(ctx, next) => {
    //ctx.body = 'login'
    await ctx.render('login')

})


module.exports = router