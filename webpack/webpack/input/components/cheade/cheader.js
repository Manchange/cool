module.exports = {
    cheader(Vue){
        Vue.component('cheader',{
            data(){
                return{
                    title:'这是一个标题'
                }
            },
            template:require('./cheader.html')
        });
    }
}