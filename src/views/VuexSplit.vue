<template>
	<div>
		<!-- <span>state里面的名字:{{username}}</span> -->
		<br/> 
		<!-- <span>getters里面的名字:{{mousername}}</span> -->
		<span @click="modifyUser">点击修改名字</span>
		<br> 模块下的值 
		<span>
			123{{name}}
			{{rename}}
		</span>
		<span @click="setname()">模块改名</span>
	</div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex' 
const {mapState,mapGetters,mapActions} = createNamespacedHelpers('user')

export default {
	computed:{
	    ...mapState(['name']),
	    ...mapGetters(['rename'])
	},
	methods:{
		...mapActions(['setname']),
		modifyUser(){
			// this.modifyname()
          //      this.$store.dispatch('modifyname')
		}
	}
}
</script>