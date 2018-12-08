## 人事
1. 薪酬构成：底薪+绩效+项目奖金 or  底薪+岗位工资+绩效

2. 上家公司项目周期，项目数量：2-4个月，5-6个两年，挑选了有代表性的放在简历上了

3. 上家社保缴纳：按照最低标准缴纳，大概在300-500之间

4. 上家公司规模和所在部门人数，人员配比：60多人，技术部40多人，前端2人，后端3人为一个项目组，不算UI和测试

5. 上家公司离职原因：合同到期，个人发展意愿，家庭因素
	
## 浏览器渲染过程

1. 解析HTML文件，创建DOM树

2. 解析CSS

3. 将CSS与DOM合并，构建渲染树（render tree）

4. 布局和绘制，重绘（repaint）和重排（reflow）

	* 重排：若渲染树的一部分更新，且尺寸变化，就会发生重排；
	
    * 重绘：部分节点需要更新，但不改变其他集合形状。如改变某个元素的颜色，就会发生重绘。 

## html引用css方法如下

1. 在div中使用css样式制作div+css网页

2. html中使用style自带式

3. 使用@import引用外部CSS文件

4. 使用link引用外部CSS文件 推荐此方法


## 清除浮动

1. 父级div定义伪类：after和zoom

    * .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
	
    * .clearfloat{zoom:1}
    
2. 在结尾处添加空div标签clear:both

    * .clearfloat{clear:both}
    
3. 父级div定义height

4. 父级div定义overflow:hidden

## CSS控制文字，超出部分显示省略号
```css
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
```
## 各种居中

1. 定位方法
```css
        position: absolute;
        left:(50% );
        top:(50%);
        transform:translate(-50%,-50%)
```
2. flex布局（父元素设置）
```css
        display: flex;
        justify-content: center;
        align-items: center;
```

## w3c标准

  * 三个方面的标准：结构、表现、行为

## IE6 7 8 浏览器兼容问题

1. 不同浏览器的标签默认的外补丁和内补丁不同
  * CSS里    *{margin:0;padding:0;}
    
2. 块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大
  * CSS里    *{margin:0;padding:0;}
    
3. 设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度

  * 给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
    
4. 行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug

  * 在display:block;后面加入display:inline;display:table;
    
5. 图片默认有间距

  * 使用float属性为img布局
    
6. 标签最低高度设置min-height不兼容

  * 如果我们要设置一个标签的最小高度200px，需要进行的设置为：{min-height:200px; height:auto !important; height:200px; overflow:visible;}

## flex-box
1. 弹性盒父元素
  * flex-direction: row || colum  //指定容器中子元素排列方式

  * flex-warp:nowrap || wrap  //设置弹性盒子的子元素超出父容器时是否换行

  * flex-flow:flex-direction 和 flex-wrap 的简写

  * align-items:设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式 //center项目位于容器的中心;flex-start(end)项目位于容器的开头(结尾)。

  * align-content:修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐

  * justify-content：设置弹性盒子元素在主轴（横轴）方向上的对齐方式 //center || space-between || space-around

2. 弹性盒子元素
  * flex：设置弹性盒子的子元素如何分配空间。 宽度设置百分比 width：25% || flex: 1

  * align-self：在弹性子元素上使用。覆盖容器的 align-items 属性。//center项目位于容器的中心;flex-start(end)项目位于容器的开头。

## 引用类型和基本类型的区别

引用类型 | 基本类型
:---|:----
*基本类型的值是不可变的 | *引用类型的值是可变的
*基本类型的比较是值的比较 | *引用类型的比较是引用的比较
*基本类型的变量是存放在栈区 | *引用类型的值是同时保存在栈内存和堆内存中的对象

## js栈和堆的区别

  js变量存储有栈和堆存储,访问时一种是按值一种是按引用，基础变量是按值,新建的时候就是建立一个独立的副本已经与等号右边的值没有关系。对象是按引用访问，新建的时候只是一个对象的引用而已它代表这个对象。

## 各种数据类型的各种方法

  数组方法：
* pop，shift(删除数组最后一个(第一个)元素，返回删除的元素)

* push，unshift(往数组尾部(开头)着增加一个或多个元素，返回数组新的长度)

* splice(star, deleteNun, ...items )(在数组中插入、删除、替换的通用方法（返回删除	数组元素组成数组）)
  
  * star：起始索引位置

  * deleteNum 需删除的数量

  * items：插入的元素（可以是多个）

### call和apply区别
|call|apply
:-:|:-:|:-:
区别|fn.call(thisObj,ang1,ang2,...) |fn.apply(thisObj,arr) 
共同|改变this指向，在一个函数调用另一个不同函数的方法
        

## H5新特性：

1. 用于绘画canvas元素

2. viedo和audio

3. localstorage本地离线存储

4. 语义化标签：article，footer，header，nav，section

5. 表单控件：calender，date，time，email，url，search


## JS正则

1. 正则表达式中符号代表

  * \s空格    \S非空格
  * \d数字    \D非数字
  * \w字符（字母，数字，下划线） \W非字符
  * \b匹配一个单词的边界     \B匹配非单词边界

2. 常用的js正则表达式
  * 用户名正则，4到16位（字母，数字，下划线，减号）
```js
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
```
  * 密码强度正则
```js
		//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
		var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
```
  * 整数正则
```js
		//正整数正则
		var posPattern = /^\d+$/;
		//负整数正则
		var negPattern = /^-\d+$/;
		//整数正则
		var intPattern = /^-?\d+$/;
		//输出 true
		console.log(posPattern.test("42"));
		//输出 true
		console.log(negPattern.test("-42"));
		//输出 true
		console.log(intPattern.test("-42"));
```
  * Email正则
```js
	var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
```
  * 手机号码正则
```js
	var mPattern = /^1[3|4|5|8][0-9]\d{4,8}$/;
```
  * 身份证正则
```js
	var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
```

  * Url正则
```js
	var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
```

## 重要算法

#### 数组去重
  1. 利用splice直接在原数组进行操作：双层循环，外层循环元素，内层循环时比较值；值相同时，则删去这个值

   * 缺点：占用内存高，速度慢
 
  2. 对象键值法去重：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键
```js
	function uniq(array){
		var temp = {}, r = [], len = array.length, val, type;
		for (var i = 0; i < len; i++) {
			val = array[i];
			type = typeof val;
			if (!temp[val]) {
				temp[val] = [type];
				r.push(val);
			} else if (temp[val].indexOf(type) < 0) {
				temp[val].push(type);
				r.push(val);
			}
		}
		return r;
	}
	var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
	console.log(uniq(aa));
```
  3. 数组下标法：如果当前数组的第i项在当前数组中第一次出现的位置不是i
```js
	function uniq(array){
		var temp = [];
		for(var i = 0; i < array.length; i++) {
			//如果当前数组的第i项在当前数组中第一次出现的位置是i，才存入数组；否则代表是重复的
			if(array.indexOf(array[i]) == i){
				temp.push(array[i])
			}
		}
		return temp;
	}

	var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
	console.log(uniq(aa));
```

#### 数组排序（3）

1. 冒泡排序法：大的数排到后面
```js
	var price = [10,2,8,55,32,18,9,11,30,16,19,20];
        for(var j=0;j<price.length-1;j++){
            // 逐个把最大的数往后排列
            for(var i=0;i<price.length-1-j;i++){
                // 当前元素跟下一个元素对比，把最大的逐个往后排列
                if(price[i] > price[i+1]){
                    // 利用一个中间变量存放price[i]的值
                    var temp = price[i];
                    price[i] = price[i+1];
                        price[i+1] = temp;
                    }
            }
            
        }
```

2. 选择排序法：小的数排前面
```js
	var price = [10,2,8,55,32,18,9,11,30,16,19,20];
        for(var i=0;i<price.length;i++){
            for(var j=1+i;j<price.length;j++){
                // 把当前元素分别跟后面的元素对比,把最小的逐个往前排列
                if(price[i] > price[j]){
                    var temp = price[i];
                    price[i] = price[j];
                    price[j] = temp;
                }
            }
        }
        console.log(price);
```

3. 快速排序法(利用递归函数实现排序,每次获取数组中间元素cItem,把大于和小于cItem的元素分别放置在arrGt和arrLt两个数组中)
```js
	var arr = [10, 8, 20, 5, 6, 30, 11, 9];
		function fastSort(arr){
			// 递归退出条件
			if(arr.length<=1){
				return arr;
			}
			// 找出数组中间位置元素
			var cIdx = parseInt(arr.length/2);
			// 删除中间元素，避免与自己本身进行对比而造成死循环
			var cItem = arr.splice(cIdx,1);//cItem=[6],arr=[10, 8, 20, 5, 30, 11, 	9]
			// 创建两个空数组用于保存大于或小于cItem的数字
			var arrLt = [];//[5]
			var arrGt = [];//[10,8,20,30,11,9]
			// 遍历数组，分别与cItem进行对比
			// 把小于cItem的数写入arrLt
			// 把大于cItem的数写入arrGt
			for(var i=0;i<arr.length;i++){
			if(arr[i]<cItem[0]){
			arrLt.push(arr[i])
			}else{
			arrGt.push(arr[i]);
			}
			}
			console.log(arrLt,cItem,arrGt);
			return 	fastSort(arrLt).concat(cItem,fastSort(arrGt));//[5].concat([6],fas	tSort([10,8,20,30,11,9]))
		}
			console.log(fastSort(arr));// [10, 8, 20, 5, 6, 30, 11, 9] -> [5, 6, 	8, 9, 10, 11, 20, 30]
```	

## webSocket

  webSocket是h5新协议，基于tcp协议，实现浏览器与客户端的双工通信。
    具体没用过

## webStorage和cookie的区别
|cooke|webStorage
-|-|-
性质不同|cookie在浏览器与服务器之间来回传递 | sessionStorage和localStorage不会把数据发给服务器，仅在本地保存
时效不同|cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭 | sessionStorage：仅在当前浏览器窗口关闭前有效。localStorage：  始终有效，长期保存。
存储大小同|cookie数据不能超过4k|sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
作用域不同|cookie也是在所有同源窗口中都是共享的 | sessionStorage不在不同的浏览器窗口中共享；
||localStorage在所有同源窗口中都是共享的；
||WebStorage 支持事件通知机制，可以将数据更新的通知发送给监听者。
||	Web Storage 的 api 接口使用更方便。


## webpack

1. 什么是webpack

  * `WebPack`可以看做是模块打包机：它做的事情是，分析你的项目结构，
  * 找到`JavaScript`模块以及其它的一些浏览器不能直接运行的拓展语言（`Scss`，`TypeScript`等），
  * 并将其转换和打包为合适的格式供浏览器使用。

2. webpack的工作方式

    * 把你的项目当做一个整体，通过一个给定的主文件（如：index.js），`Webpack`将从这个文件开始找到你的项目的所有依赖文件，
	* 使用`loaders`处理它们，最后打包为一个（或多个）浏览器可识别的`JavaScript`文件。`Webpack`的处理速度更快更直接，
	* 能打包更多不同类型的文件。

3. 安装webpack

    * Webpack可以使用npm安装，新建一个空的练习文件夹（此处命名为webpack sample project），在终端中转到该文件夹后执行下述指令就可以完成安装。
```js
		//全局安装
        npm install -g webpack
        //安装到你的项目目录
        npm install --save-dev webpack
```

4. 通过配置文件来使用Webpack

    * 在当前练习文件夹的根目录下新建一个名为`webpack.config.js`的文件，我们在其中写入如下所示的简单配置代码，
	* 目前的配置主要涉及到的内容是入口文件路径和打包后文件的存放路径。
```js
        module.exports = {
            entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
            output: {
                path: __dirname + "/public",//打包后的文件存放的地方
                filename: "bundle.js"//打包后输出文件的文件名
            }
        }
```

  * 有了这个配置之后，再打包文件，只需在终端里运行`webpack`命令就可以了，这条命令会自动引用`webpack.config.js`文件中的配置选项

5. 更快捷的执行打包任务
    * `npm`可以引导任务执行，对npm进行配置后可以在命令行中使用简单的`npm start`命令来替代上面略微繁琐的命令。
	* 在`package.json`中对`scripts`对象进行相关设置即可：
```js
        {
            "name": "webpack-sample-project",
            "version": "1.0.0",
            "description": "Sample webpack project",
            "scripts": {
                "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
            },
            "author": "zhang",
            "license": "ISC",
            "devDependencies": {
                "webpack": "3.10.0"
            }
        }

    //ps: npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用`npm start`就可以执行其对于的命令，
```

  * 如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用
```js
	 npm run {script name}如npm run build
```
6. `webpack`的强大功能

    * 生成Source Maps（使调试更容易）

    * 在webpack的配置文件中配置source maps，需要配置devtool，它有以下四种不同的配置选项，各具优缺点
	
		* (1). `source-map`  在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
		
		* (2). `cheap-module-source-map` 在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，
		
		  但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
		
		* (3). `eval-source-map` 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
		
		  这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。
		 
		  在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
		
		* (4). `cheap-module-eval-source-map`    这是在打包文件时最快的生成source map的方法，
		
		  生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；


  * 对小到中型的项目中，eval-source-map是一个很好的选项，再次强调你只应该开发阶段使用它，我们继续对上文新建的webpack.config.js
```js
    module.exports = {
        devtool: 'eval-source-map',
		//使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
		//这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。
		//在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
        entry:  __dirname + "/app/main.js",
        output: {
            path: __dirname + "/public",
            filename: "bundle.js"
        }
    }

    //ps:cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
``` 

7. `webpack`构建本地服务器

  * 想让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果，其实Webpack提供一个可选的本地开发服务器，
  * 这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，
  * 在webpack中进行配置之前需要单独安装它作为项目依赖
```js
        npm install --save-dev webpack-dev-server
```

  * `devserver`作为webpack配置选项中的一项，以下是它的一些配置选项：
  
    * contentBase  默认webpack-dev-server会为根文件夹提供本地服务器，
	
	  如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
	
    * `port`  设置默认监听端口，如果省略，默认为"8080"
	
    * `inline`  设置为true，当源文件改变时会自动刷新页
	
    * `historyApiFallback`  在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    
    把这些命令加到`webpack`的配置文件中，现在的配置文件`webpack.config.js`如下所示
```js
        module.exports = {
            devtool: 'eval-source-map',

            entry:  __dirname + "/app/main.js",
            output: {
                path: __dirname + "/public",
                filename: "bundle.js"
            },

            devServer: {
                contentBase: "./public",//本地服务器所加载的页面所在的目录
                historyApiFallback: true,//不跳转
                inline: true//实时刷新
            } 
        }
```

    在`package.json`中的`scripts`对象中添加如下命令(`webpack-dev-server --open`)，用以开启本地服务器：
```js
         {
            "name": "webpack-sample-project",
            "version": "1.0.0",
            "description": "Sample webpack project",
            "scripts": {
                "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
                "server": "webpack-dev-server --open"
            },
            "author": "zhang",
            "license": "ISC",
            "devDependencies": {
                "webpack": "3.10.0"
            }
        }
```

    在终端中输入npm run server即可在本地的8080端口查看结果

8. Loaders配置

    Loaders是webpack提供的最激动人心的功能之一了。
	
	通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，
	
	或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，
	
	合适的Loaders可以把React的中用到的JSX文件转换为JS文件。

    Loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置，Loaders的配置包括以下几方面：
	
>>   (1). `test`：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
	
>>   (2). `loader`：loader的名称（必须）
	
>>   (3). `include/exclude`:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
	
>>   (4). `query`：为loaders提供额外的设置选项（可选）

9.  Babel安装与配置

    Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：
	
>-   让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；

>-   让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

>    安装：
	
>-    Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，
	
>-	webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，
	
>-	你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）
```js
        npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```

>	配置：
	
>-  webpack中配置Babel的方法如下:
```js
        module.exports = {
            entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
            output: {
                path: __dirname + "/public",//打包后的文件存放的地方
                filename: "bundle.js"//打包后输出文件的文件名
            },
            devtool: 'eval-source-map',
            devServer: {
                contentBase: "./public",//本地服务器所加载的页面所在的目录
                historyApiFallback: true,//不跳转
                inline: true//实时刷新
            },
            module: {//此处配置babel
                rules: [
                    {
                        test: /(\.jsx|\.js)$/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "env", "react"
                                ]
                            }
                        },
                        exclude: /node_modules/
                    },
                    {   //下面css-loader的配置，ps:同一个文件引入多个loader的方法(数组对象写法)。
                        test: /\.css$/,
                        use: [
                            {
                                loader: "style-loader"
                            }, {
                                loader: "css-loader"
                            }
                        ]
                    }
                ]
            },
            plugins: [//此处配置plugins
                new webpack.BannerPlugin('版权所有，翻版必究')
            ],
        };
```

10. 一切皆模块

    Webpack有一个不可不说的优点，它把所有的文件都都当做模块处理，JavaScript代码，CSS和fonts以及图片等等通过合适的loader都可以被处理。

    >(1). CSS:

>>-		webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，
	
>>-		css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,
	
>>-		style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
   
>   安装 
```js
		npm install --save-dev style-loader css-loader
```

>    CSS预处理器：
	
>-        Sass 和 Less 之类的预处理器是对原生CSS的拓展，
		
>-		它们允许你使用类似于variables, nesting, mixins, inheritance等不存在于CSS中的特性来写CSS，
		
>-		CSS预处理器可以这些特殊类型的语句转化为浏览器可识别的CSS语句，
		
>-       在webpack里使用相关loaders进行配置就可以使用了：Less Loader，Sass Loader，Stylus Loader

11. 插件（Plugins）

	插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
		
	插件并不直接操作单个文件，它直接对整个构建过程其作用。

    使用插件的方法：
	
>-		要使用某个插件，我们需要通过npm安装它，
		
>-		然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例（plugins是一个数组），
		
>-		详情看上文插件配置




##  jQuery扩展插件的方法

1. extend(object)为jQuery添加一个静态方法.fn.extend(object) 为jQuery实例添加一个方法

## Ajax实现过程

>    (1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
	
>    (2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
	
>    (3)设置响应HTTP请求状态变化的函数
	
>    (4)发送HTTP请求
	
>    (5)获取异步调用返回的数据
	
>    (6)使用JavaScript和DOM实现局部刷新
	

>    优点：

>-	不需要插件支持
	
>-	用户体验极佳
	
>-	提升Web程序性能
	
>-	减轻服务器和宽带的负担
		
>    缺点：

>-    前进后退按钮被破坏

>-    搜索引擎的支持不够
 
>-    开发调试工具缺乏

>### Ajax拦截

> 设置请求参数，建立与服务器连接时，设置ajax拦截
```js
open: function(arg){
	arg://接受到的参数里面包含了：type，url，async
	//做一些拦截方法：判断请求方式，添加时间戳
}
onload：function(){
	//修改请求返回的数据“responseText”
}
```

>### Ajax缓存

>	(1) POST的请求，是不可以在客户端缓存的，每次请求都需要发送给服务器进行处理，每次都会返回状态码200。

>	（这里可以优化的是，服务器端对数据进行缓存，以便提高处理速度）

>	(2) GET的请求，是可以（而且默认）在客户端进行缓存的，

>	除非指定了不同的地址，否则同一个地址的AJAX请求，不会重复在服务器执行，而是返回304。

>### Ajax和Axios区别

>    (1)Ajax： 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。
	
>>    ajax技术实现了网页的局部数据刷新，axios实现了对ajax的封装
		
>>    axios是ajax ajax不止axios
		
>    (2)Axios： 用于浏览器和node.js的基于Promise的HTTP客户端，它本身具有以下特征：
	
>>  1. 从浏览器制作XMLHttpRequests 
			
>>  2. 让HTTP从node.js的请求    
		  
>>  3. 支持Promise API

>>  4. 拦截请求和响应    
		
>>  5. 转换请求和响应数据    
		  
>>  6. 取消请求      
		
>>  7. 自动转换为JSON数据    
		  
>>  8. 客户端支持防止XSRF




## 闭包

>    创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。
    
>	闭包的特性：
	
>   1. 函数内再嵌套函数
		
>   2. 内部函数可以引用外层的参数和变量
		
>   3. 参数和变量不会被垃圾回收机制回收

## ES6新特性

>    1.增加块作用域
	
>    2.增加let const
	
>    3.解构赋值
	
>    4.函数参数扩展 （函数参数可以使用默认值、不定参数以及拓展参数）
	
>    5.增加class类的支持
	
>    6.增加箭头函数
	
>    7.增加模块和模块加载（ES6中开始支持原生模块化啦）
	
>    8.math, number, string, array, object增加新的API

## Promise
> Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法。
    那就new一个
```js
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });
```
	
>    Promise的构造函数接收一个参数，是函数，并且传入两个参数：`resolve`，`reject`，

>    分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。

>    其实这里用“成功”和“失败”来描述并不准确，

>    按照标准来讲，resolve是将Promise的状态置为fullfiled，reject是将Promise的状态置为rejected
    
>    在上面的代码中，我们执行了一个异步操作，也就是setTimeout，2秒后，输出“执行完成”，并且调用resolve方法。

>    运行代码，会在2秒后输出“执行完成”。

>    注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节。

>    所以我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数，如：
```js
    function runAsync(){
        var p = new Promise(function(resolve, reject){
            //做一些异步操作
            setTimeout(function(){
                console.log('执行完成');
                resolve('随便什么数据');
            }, 2000);
        });
        return p;            
    }
    runAsync()
```

>   在我们包装好的函数最后，会return出Promise对象，也就是说，执行这个函数我们得到了一个Promise对象。还记得Promise对象上有then、catch方法吧？这就是强大之处了，看下面的代码：
```js
    runAsync().then(function(data){
        console.log(data);
        //后面可以用传过来的数据做些其他操作
        //......
    });
```

>    在runAsync()的返回上直接调用then方法，then接收一个参数，是函数，并且会拿到我们在runAsync中调用resolve时传的的参数。运行这段代码，会在2秒后输出“执行完成”，紧接着输出“随便什么数据”

>    原来then里面的函数就跟我们平时的回调函数一个意思，能够在runAsync这个异步任务执行完成之后被执行。这就是Promise的作用了，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

>    效果也是一样的，还费劲用Promise干嘛。那么问题来了，有多层回调该怎么办？如果callback也是一个异步操作，而且执行完后也需要有相应的回调函数，该怎么办呢？总不能再定义一个callback2，然后给callback传进去吧。而Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作。

>    所以使用Promise的正确场景是这样的：

1. 链式操作的用法：
```js
        runAsync1()
        .then(function(data){
            console.log(data);
            return runAsync2();
        })
        .then(function(data){
            console.log(data);
            return runAsync3();
        })
        .then(function(data){
            console.log(data);
        });
```

>    这样能够按顺序，每隔两秒输出每个异步回调中的内容，在runAsync2中传给resolve的数据，能在接下来的then方法中拿到。

>    在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以接收到数据了，比如我们把上面的代码修改成这样：
```js
    runAsync1()
    .then(function(data){
        console.log(data);
        return runAsync2();
    })
    .then(function(data){
        console.log(data);
        return '直接返回数据';  //这里直接返回数据
    })
    .then(function(data){
        console.log(data);
    });
```

>    reject的用法

>    到这里，你应该对“Promise是什么玩意”有了最基本的了解。

>    那么我们接着来看看ES6的Promise还有哪些功能。我们光用了`resolve`，还没用`reject`呢，它是做什么的呢？
>    
>    事实上，我们前面的例子都是只有“执行成功”的回调，还没有“失败”的情况，`reject`的作用就是把Promise的状态置为rejected，
>    
>    这样我们在then中就能捕捉到，然后执行“失败”情况的回调。

>    `then`方法可以接受两个参数，第一个对应`resolve`的回调，第二个对应`reject`的回调。所以我们能够分别拿到他们传过来的数据。

2. catch的用法:

>    Promise对象除了then方法，还有一个catch方法，它是做什么用的呢？其实它和then的第二个参数一样，用来指定reject的回调，
>    
>    用法是这样：
```js
        getNumber()
        .then(function(data){
            console.log('resolved');
            console.log(data);
        })
        .catch(function(reason){
            console.log('rejected');
            console.log(reason);
        });
```

>    效果和写在then的第二个参数里面一样。不过它还有另外一个作用：
>    
>    在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。
>    
>    请看下面的代码：
```js
        getNumber()
        .then(function(data){
        console.log('resolved');
        console.log(data);
        console.log(somedata); //此处的somedata未定义
        })
        .catch(function(reason){
        console.log('rejected');
        console.log(reason);
        });
```

>    在resolve的回调中，我们console.log(somedata);而somedata这个变量是没有被定义的。
>    
>    如果我们不用Promise，代码运行到这里就直接在控制台报错了，不往下运行了。

>    也就是说进到catch方法里面去了，而且把错误原因传到了reason参数中。
>    
>    即便是有错误的代码也不会报错了，这与我们的try/catch语句有相同的功能 

3. all的用法：

    Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
	
	我们仍旧使用上面定义好的runAsync1、runAsync2、runAsync3这三个函数，
	
	看下面的例子：
```js
        Promise
        .all([runAsync1(), runAsync2(), runAsync3()])
        .then(function(results){
            console.log(results);
        });
```

    用`Promise.all`来执行，`all`接收一个数组参数，里面的值最终都算返回`Promise`对象。
	
	这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面。
	
	那么，三个异步操作返回的数据哪里去了呢？
	
	都在then里面呢，all会把所有异步操作的结果放进一个数组中传给then，就是上面的results

    result结果：`['runAsync1()返回的结果','runAsync2()返回的结果','runAsync3()返回的结果']`

    作用：有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据，是不是很酷？
	
	有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。
	
	所有的都加载完后，我们再进行页面的初始化。

4. race的用法

	all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，
	
	这就是 `race` 方法，这个词本来就是赛跑的意思。race的用法与all一样 

## H5移动端ios/Android兼容性总结

1. 禁止复制、选中文本
```css
    .el {
        -webkit-user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
```

2. Click事件的300ms延迟

    不使用click时间，使用touchstart来代替，最好可以使用tap事件来代替click

    原理：当用户触发了touchstart之后在很短的时间内又触发了touchend，之间的距离很小，并且不触发touchmove，
	
	这样的话我们就认为是一次click事件

    解决方法：其实在移动端中我们可能会使用一些辅助工具、库，常用库：touch.js，fastclick库

3. 点透bug

    解决方式：
	 
    * 上下都用tap
	
    * 使用缓动动画，使上层元素被tap之后以动画形式消失
	 
    * 使用中间层，在上层元素和下层元素之间创建一个透明的层，给这个透明层添加click并且消失，点击上层元素后，触发了中间的透明层的click事件，透明层消失了，下层元素被保护了
    
	* 全部使用click，并使用fastclick来解救300ms延迟的问题

## 前端性能优化

>从三个方面考虑：

>* 响应速度，

>* 稳定性，

>* 用户体验

>性能优化标准：雅虎十四条

>针对点：

> 1. 响应速度：

>>*    压缩HTML代码、css代码、js代码，使用gz压缩
	
>>*    将css文件和js文件抽离
	
>>*    减少HTTP请求 =>{
	
>>*    合并css、js文件 => 注意，合并起来之后，虽然减少了HTTP的请求次数，但是单次请求的时间会增加
        
>>*        css sprites

>>*        图片转换成base64 =>减少HTTP请求次数的同时会增加入口文件的体积
        
>>*        按需加载，图片、数据,SSR（服务端渲染）

>>*        ajax缓存

>>*    }

>>    使用CDN（内容分发系统）

>>*    分布存储 => { 将资源分开存储在多个服务器中，可以提高并行下载量，一般情况下将资源放在2-4个服务器中最好 }

> 2. 稳定性

>>*    服务端：高并发可以使用nodejs作为中间服务器来处理高并发
>    
>>*    前端：代码优化重构、回调地狱、保证代码的可维护性、可测试性、可读性、减少操作dom

> 3. 用户体验：

>>*    css放头部，避免FOUC(内容样式闪烁),js放底部

## 混合开发

>    指的是利用H5页面来实现native部分功能的开发模式，属于C/S架构，需要下载安装的
	
>   开发模式分为两种：
	 
>    * 将H5页面嵌入到native应用中去实现部分功能，需要和Android、iOS进行交互
	
>    * 利用一些工具来实现，整个应用中所有的界面都由web页面来实现，最终利用工具来调用设备的原生功能，并且打包生成原生安装包
    
>	工具：
	
>    Dcloud： Hbuild(测试和打包) + mui（提供了开发效率） + （h5+runtime）（提供调用设备原生功能的能力）


## 框架

### Vue

1. 对vue的技术点的了解，大概有哪些技术点

        首先在vue它是一个mvc多层架构，使用数据双向绑定模式，这是它的一个特点；其次它是一个单页面应用，
		
		那么单页面的核心就是组件和路由，
		
		对于组件来说的话，它的侧重点更多是在组件通信这方面；
		
		在组件通信切入点的话就是vuex，用vuex是最多的


2. 组件通信：

>    （1）props和$emit
	
>        父组件向子组件传递数据是通过prop传递的，子组件在props中接收还能验证数据类型；
		
>		并且通过v-on绑定了一个getChildData事件来监听子组件的触发事件
		
>        子组件传递数据给父组件是通过$emit触发事件来做到的，通过this.$emit触发了getChildData事件
		
>    （2）中央事件总线（非父子组件通信常用）
	
>        新建一个Vue事件bus对象（var bus = new Vue()），然后通过bus.$emit触发事件，bus.$on监听触发的事件
		
>    （3）$parent和$children
	
>    （4）vuex处理组件之间的数据交互 
	
>       如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候才有上面这一些方法可能不利于项目的维护，
		
>		vuex的做法就是将这一些公共的数据抽离出来，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。

3.  vuex

    vuex是一个状态管理工具，解决多组件间的状态共享

    vuex里面有一个核心的大store，而且一个项目里只能有一个store，唯一数据源

    vuex 中store需要配置几种小玩意儿：

    1. `state`，是一个纯对象，存储需要管理的状态

        组件如何使用state中管理的状态？

        因为已经将store注入到根实例里，所以在组件可以利用this.$store.state来使用state中管理的状态

        为了做到响应式（state中数据改变，组件中使用的也改变），vuex要求我们使用计算属性来接收state中的数据
```js
        computed: {
        number () { return this.$store.state.number }
        }
```

        也可以使用mapState辅助函数来帮助组件使用state中的状态
```js
        computed: mapState(['number'])
        computed: mapState({
            number: state => state.number,
            number: 'number'
        })

        computed: {
            //...自己的计算属性
            ...mapState(['number'])
        }
```

    2. `mutations` , 更改state只有唯一的一种方式！！！！就是利用mutations的方法来进行更改

        `mutations` 也是一个纯纯的对象，身上有一些方法，这些方法能接收到state，并且进行更改
```js
        mutations = {
            increment (state) {
                state.number ++;
            }
        }
```

        当 `mutations` 的方法被调用的时候，状态就会更新

        在组件中视图store中的commit方法来调用

        this.$store.commit('increment')

        传参数的时候推荐我们传入一个对象（payload）
		
```js
        mutations = {
            increment (state, payload) {
                state.number += payload.num ;
            }
        }

        this.$store.commit('increment', { num: 2 })
        //调用的方式还有一种，就是直接搞一个对象进来

        this.$store.commit({ type: 'increment', num: 2 }) //这种最棒棒！

        //最好把方法的名字搞成常量

        const INCREMENT = 'INCREMENT'

        mutations = {
            [INCREMENT] (state, payload) {
                state.number += payload.num ;
            }
        }
        this.$store.commit({ type: INCREMENT, num: 2 })

```

>   在组件中调用mutations的时候其实还可以用mapMutations辅助函数来帮我们将mutations'中的方法放入到组件的methods中

>   methods: mapMutations([INCREMENT])//其他的用法不写啦，和mapState基本一样

3. actions， 注意！mutations里面不能放入异步操作，所以异步操作需要放在actions

    actions是一个纯纯的对象，里面放了很多的方法，这些方法会接收到一个context的对象，这个对象上有commit方法，我们就可以在做完异步操作后，调用commit方法来调用mutations的方法更改状态
```js
        actions = {
            asyncIncrement (context, payload) {
                axios.get('/random').then(res => {
                let num = res.data.num
                //准备调用mutations的INCREMENT方法来更改状态
                    context.commit({
                        type: INCREMENT,
                        num
                    })
                })
            }
        }
```

    在组件中调用actions的方法需要使用store的dispatch
```js
        this.$store.dispatch('asyncIncrement',{n:1})
```

	也可以使用mapActions将actions的方法放入组件中

4. getters， 有的时候需要根据一条现有的状态派生新状态，比如，根据 当前用户的购物车里的商品数据，需要得到用户购物车的总价钱，我们就可以利用getters来派生数据
```js
        getters = {
            doubleNumber (state) {
            return state.number * 2
            }
        }
```

	在组件中通过this.$store.getters来使用getters的数据，也可以使用mapGetters辅助函数

	这样的话当state中的状态改变，派生出来的getters也会改变

5. modules

	做项目的时候，可能要同时管理A、B这两个模块，因为开发者不一样，就会在state上保存可能毫不相干的多个状态，容易引起冲突，
	
	因为store只有一个，vuex就做了模块处理，可以将某一种状态管理所需的 `state` ，`getters`，`actions`，`mutations` 写在一个模块中，
	
	然后在创建store的时候进行配置

	调用的时候是这样的：
```js
        this.$store.state.a.number
        this.$store.state.b.number
```

6. 路由传参:

    (1)父组件中：通过路由属性中的name来确定匹配的路由，通过params来传递参数。（需要在路由表中配置'/:id'，配置后必须传参和必须接受参数）
```js
        this.$router.push({
            name: 'Describe',//params只能用name来引入路由
            params: {
            id: id
            }
        })
```

    子组件中: 这样来获取参数
```js
    this.$route.params.id
```

    (2)父组件：使用path来匹配路由，然后通过query来传递参数这种情况下 query传递的参数会显示在url后面?id=？
```js
	this.$router.push({
		path: '/describe',
		query: {
			id: id
		}
	})
```

    query需要对应路由配置：
```js
    {
        path: '/describe',
        name: 'Describe',
        component: Describe
    }
```

    (3)parmas传参和query传参区别
	
>   1. uery要用path来引入，params要用name来引入，接收参数都是类似的，
		
>>	分别是 `this.$route.query.name` 和 `this.$route.params.name` 。
		
>   2. query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示



7. 路由拦截：
```js
    router.beforeEach((to, from, next) => {
        next(); //前往下一个页面
    })
```

8.  路由钩子函数

    在某些情况下，当路由跳转前或跳转后、进入、离开某一个路由前、后，需要做某些操作，就可以使用路由钩子来监听路由的变化

    全局路由钩子：
```js
    router.beforeEach((to, from, next) => {
        next()
    })
```
    单个路由钩子：
	
    只有beforeEnter，在进入前执行，to参数就是当前路由
```js
        routes: [
            {
            path: '/foo',
            component: Foo,
            beforeEnter: (to, from, next) => {
                // ...
            }
            }
        ]
```

    路由组件钩子：（在组件中使用，类似组件生命周期钩子函数）
```js
         beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
        }
```

9.  filter

    (1)Vue.filter('filter的名字', ('要过滤的数据',(params) => { 处理函数 }))
	
    (2)单独在module文件夹中创建filters.js模块，专门存储各种filter
	
    (3)在config.js中引入filters.js文件
	
    (4)在全局配置main.js中引入config.js全局配置文件进行全局配置
	
    (5)在组件中可以直接使用，通过管道符 " | "使用，还可以使用多个过滤器多次过滤

### keep-active钩子函数

1.  activated
    详细：
    keep-alive 组件激活时调用。
    该钩子在服务器端渲染期间不被调用。

2.  deactivated
    详细：
    keep-alive 组件停用时调用。
    该钩子在服务器端渲染期间不被调用。

>   作用：

>    `<keep-alive>`包裹动态组件时,会缓存不活动的组件实例,而不是销毁它们
	
>    `<keep-alive>`是一个抽象组件:它自身不会渲染一个DOM元素,也不会出现在父组件链中
	
>    当组件在`<keep-alive>`内被切换,它的activated和deactivated这两个生命周期钩子函数将会被对应执行

## 小程序

1. 页面跳转传参（列表页条详情页传参）

    （1）在列表页 bindtap="{跳转页面的函数}"，设置自定义属性  data-id="{{要传的参数（id）}}"
	
    （2）在详情页 onload钩子函数中可以接收到一个options对象，上面有自定义属性
```js
	onLoad: function (options) {
		let id = options.id || '203087'
		this.getSoundDetail(id)  
	},
```

2. 小程序开发你是怎么做的

    使用微信开发者工具，开发者文档中提供了很多组件和API,可以调用设备原生功能 

3. px和rpx区别

    rpx单位是微信小程序中css的尺寸单位，rpx可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。
	
	如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0

4.  小程序跳转页面方法
 
    （1）通过navigator组件进行跳转，配置url属性跳转
	
    （2）通过bindtap点击事件，执行一个方法，方法调用微信官方停供的API,wx.navigateTo({ url:'要跳转页面的url' })



## 页面渲染过程

1. 解析HTML文件，创建DOM树

2. 解析CSS,形成CSS对象模型

3. 将CSS与DOM合并，构建渲染树（renderingtree）

4. 布局和绘制







## C/S，B/S架构

1.  C/S 架构

	概念：
	
>>    C/S 架构是一种典型的两层架构，其全程是Client/Server，即客户端服务器端架构，
	
>>	其客户端包含一个或多个在用户的电脑上运行的程序，
	
>>	而服务器端有两种，一种是数据库服务器端，客户端通过数据库连接访问服务器端的数据；
	
>>	另一种是Socket服务器端，服务器端的程序通过Socket与客户端的程序通信。

>    C/S 架构也可以看做是客户端架构。
>    
>>    因为客户端需要实现绝大多数的业务逻辑和界面展示。
>    
>>   这种架构中，作为客户端的部分需要承受很大的压力，因为显示逻辑和事务处理都包含在其中，
>    
>>    通过与数据库的交互（通常是SQL或存储过程的实现）来达到持久化数据，以此满足实际项目的需要。

>优点：
    
>>	C/S架构的界面和操作可以很丰富。
	
>>  安全性能可以很容易保证，实现多层认证也不难。
	
>>  由于只有一层交互，因此响应速度较快。

>缺点：
    
>>	适用面窄，通常用于局域网中。
	
>>  用户群固定。由于程序需要安装才可使用，因此不适合面向一些不可知的用户。
	
>>  维护成本高，发生一次升级，则所有客户端的程序都需要改变。

2. B/S架构

>	概念：

>>	B/S架构的全称为Browser/Server，即浏览器/服务器结构。

>>  Browser指的是Web浏览器，极少数事务逻辑在前端实现，但主要事务逻辑在服务器端实现，

>>  Browser客户端，WebApp服务器端和DB端构成所谓的三层架构。B/S架构的系统无须特别安装，只有Web浏览器即可。

>>	B/S架构中，显示逻辑交给了Web浏览器，事务处理逻辑在放在了WebApp上，这样就避免了庞大的胖客户端，减少了客户端的压力。因为客户端包含的逻辑很少，因此也被成为瘦客户端。

>	优点：
	
>>	客户端无需安装，有Web浏览器即可。
    
>>	BS架构可以直接放在广域网上，通过一定的权限控制实现多客户访问的目的，交互性较强。
    
>>	BS架构无需升级多个客户端，升级服务器即可。

>	缺点：
    
>>	在跨浏览器上，BS架构不尽如人意。
    
>>	表现要达到CS程序的程度需要花费不少精力。
    
>>	在速度和安全性上需要花费巨大的设计成本，这是BS架构的最大问题。
    
>>	客户端服务器端的交互是请求-响应模式，通常需要刷新页面，这并不是客户乐意看到的。（在Ajax风行后此问题得到了一定程度的缓解）

3.  两个架构对比

    C/S和B/S都可以进行同样的业务处理，但是B/S随着Internet技术的兴起，是对C/S结构的一种改进或者扩展的结构。
	
	相对于C/S，B/S具有如下优势：

    1. 分布性：可以随时进行查询、浏览等业务
	
    2. 业务扩展方便：增加网页即可增加服务器功能
	
    3. 维护简单方便：改变网页，即可实现所有用户同步更新
	
    4. 开发简单，共享性强，成本低，数据可以持久存储在云端而不必担心数据的丢失。
