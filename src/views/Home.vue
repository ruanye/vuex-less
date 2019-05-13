<template>
  <div class="home">
    {{$store.state.number}}
     <button class="btn" @click="AddCount">+</button>
 </div>
</template>

<script>


export default {
  name: 'home',
  methods:{
    AddCount(){
      //1通过diapatch派发事件到actions
      this.$store.dispatch('ActionsAdd',10)
    }
  }
 
}
</script>
<style lang="less" scoped>
   .about{
     font-size: 60px;
   }
  .btn{
     display:inline-block;
     width: 100px;
     height: 100px;
     line-height: 60px;
     background: yellow;
     appearance: none;
     outline: none;
     font-size: 40px;
     
  }
</style>
