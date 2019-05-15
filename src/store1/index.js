import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import user from './moudle/user'
let state = {
	 username:'lili'
} 
export default new Vuex.Store({
 	state,
	getters,
	actions,
	mutations,
	modules:{
      user
	}
	
})
