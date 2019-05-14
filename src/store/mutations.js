import * as Types from './mutations-types'
// Types  ={SET_USER:"SET_USER"}
//[Types.SET_USER]()
const mutations ={
   [Types.SET_USER](state,payload){
     state.username = payload 
   }
}
export default mutations