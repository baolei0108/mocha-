const Koa = require('koa')
const app = new Koa()
//const port = 3000
const config = require('./config/default.js')
 
const Router = require('koa-router')
const router = new Router()
const views = require('koa-views')
const path = require('path')

// 配置服务端模板渲染引擎中间件,渲染views文件夹下面的ejs文件,这段代码一定要放在最前面，避免报错
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

//引入路由
app.use(router.routes())
app.use(router.allowedMethods())


//设置路由
router.get('/', async(ctx, next) => {
    //ctx.body = 'index'
    await ctx.render('index', {
        title: '首页'
    })
  
})

router.get('/login', async(ctx, next) => {
    //ctx.body = 'login'
    await ctx.render('login')

})


app.listen(config.port)
console.log(`listen on http://localhost ${config.port}` )