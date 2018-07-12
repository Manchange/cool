define(['Vue','work'],(Vue,work)=>{
	work();
	return ()=>{
		Vue.component("cheader",{
			data(){
				return {
					title:'this is title',
					style:{
						border:'1px solid #ccc',
						lineHeight:'50px'
					}
				}
			},
			template:`
			<div>
				<div v-text="title" :style=style>
				</div>
				<dan />
			</div>
			`
		});
	}
})
