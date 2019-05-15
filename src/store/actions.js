import * as Types from './mutations-types'
const actions ={
   addCar({commit},payload){
      commit(Types.ADD_CAR,payload)
   }
}
export default actions