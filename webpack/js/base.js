require.config({
    baseUrl:'js',
    paths:{
        'Vue':'vue',
        'text':'text',
        'work':'../work/work',
		'work1':'../work/work1'
    }
})
require(['Vue','work','work1'],function(Vue,work,work1){
	work1();
    new Vue({
        el: "#demo",
        data: {},
        template:`
            <div>
                <cheader />
            </div>
        `
    })
})