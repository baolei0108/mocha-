module.exports = {
    port: 3000,
    
    test: {
        rollnews: 'http://cmsdataapi.test.emapd.com/api/cmsnews/QueryCmsNewsByChannel',
        gubanews: 'http://61.129.128.56:8802/api/ClickRank/GetGuBaClickRank?count=10&source=news',
        blognews: 'http://61.129.128.56:8802/api/ClickRank/GetBlogClickRank?source=news',
        caijingnenws: 'http://61.129.128.56:8802/api/ClickRank/GetClickRank'
    },

    getURL: function(name) {
        //console.log(this.test.caijingnenws)
        //console.log(this.test[name])

        return this.test[name]
    }

}