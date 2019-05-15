import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
let state ={
  carlist:[] 
}
if(localStorage&&localStorage['carlist']){
  state.carlist = JSON.parse(localStorage['carlist'])
}
export default new Vuex.Store({
   state,
   actions,
   mutations
})