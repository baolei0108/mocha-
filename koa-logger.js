module.exports = async(ctx, next) => {
     //开始
     const start = new Date().getTime()

     //等待所有进程结束
     await next() //最后的一个进程，放在程序最开始的位置

     //结束时间
     const end = new Date().getTime()

     //打印
     console.log('请求地址：' + ctx.request.ul, '，耗时：' + (end-start) );


}


