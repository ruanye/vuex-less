<template>
	<div>
		<label for="checkall">
			<span>全选</span>
			{{checkAllValue}}
	        <input id="checkall"  type="checkbox" v-model="checkAll" class="inp">
	   </label>
	 <ul>
		<li v-for="good in carlist" :key="good.id" class="caritem">
			 <input class="inp" type="checkbox" v-model="good.sele">
			   <div>
			  <img :src="good.img" alt="">
			  <p>{{good.count}}</p>
              <p> {{good.name}}</p>
		      <p>{{good.price}}</p>
			</div>
		</li>
	  </ul>
	  <div>总价：{{totalPrice}}</div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations}  from 'vuex'
import * as Types from '../store/mutations-types.js'
export default {
	computed:{
		...mapState(['carlist']),
		...mapGetters(['totalPrice','checkAllValue']),
		checkAll:{
			get(){
              return this.checkAllValue 
			},
			set(val){
              this[Types.CHANGE_CHECKALL](val)
			}
		}
	},
	methods:{
		...mapMutations([Types.CHANGE_CHECKALL])
	}
}
</script>
<style lang="less" scoped>
	.caritem{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.inp{
	align-self: center;
	flex:0 0 auto;
    appearance: none;
	outline: none;
	width: 40px;
	height: 40px;
	border: 1px solid green;
	border-radius: 20%;
	position: relative;
	
  }	
  .inp:checked.inp:before{
	  position: absolute;
	  content: "✔";
	  font-size: 20px;
	  width: 20px;
	  height: 20px;
	  top:10px;
	  left:10px ;
	  color: green;
	  
  }
</style>
