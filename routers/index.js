const Router = require('koa-router')
const router = new Router()

//引入财经获取到的数据
const caijingnews = require('../modules/caijingnews')

router.get('/', async(ctx, next) => {
    //ctx.body = 'index'

    let caijing;
    caijing = await caijingnews('8');

    //渲染views文件的index.ejs
    await ctx.render('index', {
        title: '首页',
        caijing: caijing
    })
  
})

router.post('/index', async(ctx, next) => {
    // await ctx.render('index', {
    //     title: 'yes'
    // })
    var name2 = ctx.request.body.name
    ctx.body = `<h1>welcome, ${name2}</h1>`

})


// router.post('/', async(ctx, next)=> {
//     ctx.body = `<h1>welcome</h1>`
// })


module.exports = router   //重要