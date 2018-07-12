define(['Vue'],function(Vue){
    return function(){
        Vue.component("dan",{
                data(){
                    return {
                        bool:'false',
                        content:'这是一个弹窗'
                    }
                },
                methods: {
                    show(bool){
                        this.bool = bool;
                    }
                },
                template:`
                <div style="
                    marginTop:20px;
                ">
                    <button class="btn" @click="show('ture')">显示</button>
                    <div :class="{hid:bool==='ture'}" v-show="bool==='ture'">
                        <span v-html="content"></span>
                        <i :class="{close:bool==='ture'}" @click="show('false')">&times;</i>
                    </div>
                </div>
                `
            })
    }
})