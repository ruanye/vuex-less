<template>
  <div class="about">
    <!-- mapState和mapGeters的用法 -->
    {{count}}
    {{username}}
    <!-- {{Num}} -->
    {{abc}}
   </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';
import { constants } from 'fs';
export default {
  computed: {
       ...mapState(['count','username']),
       ...mapGetters({
         abc:'Num'
       }),
       ...mapGetters(['Num'])
      // ...mapState({
      //   count:state=>state.count
      // }),
    
  },
  created() {
    console.log(this.count)
  },
 
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
