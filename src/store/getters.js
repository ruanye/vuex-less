export default {
	totalPrice(state){
      return state.carlist.reduce((prev,next)=>prev+next.count*next.price 
	   ,0)
	},
	checkAllValue(state){
      return state.carlist.every(item=>item.sele==true)
	}
}