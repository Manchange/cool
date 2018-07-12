var Vue = require('./vue.js');

require('../components/cheade/cheader.js').cheader(Vue);
require('../components/cmain/cmain.js').cmain(Vue);
require('../components/cfooter/cfooter.js').cfooter(Vue);
new Vue({
    el:'#demo',
    template:`
        <div>
            <cheader />
            <cmain />
            <cfooter />
        </div>
    `
})