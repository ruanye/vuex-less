import {setuser} from  '../api'
import * as Types from './mutations-types'
// console.log(Types) 
// Types  ={SET_USER:"SET_USER"}
const actions ={
  async modifyname({commit}){
	 let name = await setuser()
	  commit(Types.SET_USER,name)
		//commit("SET_USER",name)
   }
}
export default actions