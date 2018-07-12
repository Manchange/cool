var path = require('path');
module.exports = {
    entry:'./input/js/base.js',
    output:{
        path:path.resolve(__dirname,'output'),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            //正则匹配 匹配所有的html文件并交给html-loader处理   require->text模块
            test: /\.html$/,
            use: 'html-loader'
        },{
            //正则匹配 匹配所有的css文件并交给css-loader处理   require->text模块
            test: /\.css$/,
            use: 'css-loader'
        }]
    },
    mode: 'production'
}