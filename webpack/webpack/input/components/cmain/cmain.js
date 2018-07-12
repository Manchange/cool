module.exports = {
    cmain(Vue){
        Vue.component('cmain',{
            data(){
                return{
                    li:['fsadf','fasd','gfj','hdfg','dadfre','dian','iisa','dhaio','ahfhoi','aofuhe','shfiash','afids','ahiufb','aoifn','ahsifb'],
                    style:{
                        display:'flex',
                        listStyle:'none',
                        padding:'10px',
                        border:'1px solid red',
                        margin:'10px 0',
                        borderRadius:'10px',
                        justifyContent:'center'
                    }
                }
            },
            template:require('./cmain.html')
        });
    }
}