import Vue from 'vue';
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
let state ={
  carlist:[] 
}
if(localStorage&&localStorage['carlist']){
  state.carlist = JSON.parse(localStorage['carlist'])
}
export default new Vuex.Store({
   state,
   getters,
   actions,
   mutations,
   plugins:[logger()]
})