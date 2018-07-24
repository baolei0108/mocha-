const Router = require('koa-router')
const router = new Router()


router.get('/', async(ctx, next) => {
    //ctx.body = 'index'
    await ctx.render('index', {
        title: '首页'
    })
  
})

router.post('/index', async(ctx, next) => {
    // await ctx.render('index', {
    //     title: 'yes'
    // })
    var name2 = ctx.request.body.name
    ctx.body = `<h1>welcome, ${name2}</h1>`

})


module.exports = router