const axios = require('axios')

module.exports = {


    catchWithCacheFile: async function(url, options, cache_time, timeout) {
         /**
         * 抓取网上内容并内存缓存和落地缓存
         *
         * @param {*} url 抓取地址
         * @param {*} axios axios选项 
         * @param {*} cache_time 缓存时间：毫秒
         * @param {*} timeout 远程获取超时时间：毫秒 不传或者null则没有超时时间
         * @returns
         */


        try {
            let back = await axios(url, options)
            let data = back.data

            return data

        } catch(error) {

        }


        return null;

    }



}