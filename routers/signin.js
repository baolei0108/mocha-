const Router = require('koa-router')
const router = new Router()
const userMoudle = require('../lib/mysql')
const sha1 = require('sha1')

router.get('/signin', async(ctx, next) => {
    //ctx.body = 'login'
    await ctx.render('signin', {
        
    })

})


router.post('/signin', async(ctx, next) => {
    //ctx.body = 'login'
    await ctx.render('index', {
        
    })

}) 


module.exports = router