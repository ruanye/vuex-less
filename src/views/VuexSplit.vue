<template>
	<div>
		<span>state里面的名字:{{username}}</span>
		<br/> 
		<span>getters里面的名字:{{mousername}}</span>
		<span @click="modifyUser">点击修改名字</span>
	</div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
	computed:{
		...mapState(['username']),
		...mapGetters(['mousername'])
	},
	methods:{
		...mapActions(['modifyname']),
		modifyUser(){
			this.modifyname()
          //      this.$store.dispatch('modifyname')
		}
	}
}
</script>