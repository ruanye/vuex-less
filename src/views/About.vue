<template>
  <div class="about">
    {{$store.state.count}}
    {{$store.getters.Num}}
    <button class="btn" @click="addcount">+</button>
  </div>
</template>
<script>
export default {
  methods:{
    addcount(){
       //1提交increamens事件到mutations
       this.$store.commit('increamens',{a:2,b:3})
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
