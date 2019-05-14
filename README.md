# vuex-lesson
#vuex  核心是store仓库 组件状态管理 
例子：用户名  所有组件都要用到用户名的时候 可以使用vuex 
-- 安装vuex  npm install vuex 
1. vuex数据流流程(单向数据流 )
vuex   view(视图层)-->action(事件或者动作去修改state)-->state 映射到--->view(视图层)
2. 建立vuex文件 
和main.js同级 建立一个store.js 
3. 书写流程 
export default  后面只能跟函数或者对象 
1）导出  export default  new Vuex.Store
2) 在main.js 引入  import store from './store ' 注意 前面的store名字不能变 
3） 挂载在new Vue的实例上面  
```
new Vue({
  store,
  ....
  })
``` 
##vuex里面的各个属性  vuex当做全局组件 
1. strict 是否启用严格模式，一般开发环境会默认使用严格模式
判断是否是开发环境的变  process.env.NODE_ENV 
<!-- development 开发环境  production 生产环境-->
```
strict:process.env.NODE_ENV=='development'
```
在严格模式下 只允许通过mutations去修改state 
2. state 相当于组件的data state的取值 通过this.$store.state.变量名  
```
state:{count:1 }
取值：this.$store.state.count 
``` 
3. getters vuex的计算属性 computed 用来计算state  
```
 getters:{
	  Num(state){
        return state.count+"abc"
	  }	
	}
取值：this.$store.getters.Num
```
actions  mutations 相当于组件的methods(方法函数)
4. mutations 只能处理同步  
组件-->commit -->mutations-->state-->组件
1)组件调用:this.$store.commit('自定义事件名')
```
this.$store.commit('increatment')
```
通过commit调用会把事件传给mutations

2)mutations 定义commit传过来的同名函数(increatment),第一个参数是state 
```
mutations:{
  increatment(state){

  }
}
```
3) mutations 里面的函数可以修改state 
```
  increatment(state){
     state.count+=1
  }
```
5. actions 如果有异步操作必须通过actions 同步异步actions都可以处理 
1）组件通过dispatch派发时间到actions 
this.$store.dispatch('自定义事件名')
2)actions里面定义和dispatch同名的事件,参数是一个解构赋值出来的commit函数 这个commit和组件的this.$store.commit是等价 
3） 在actions里面通过commit('自定义事件名')提交到mutations(只有通过mutations才是能修改state)
4)mutations定义和commit提交过来事件同名的函数 函数里面修改state 

actions和matutions传参问题  
1) 如果是一个参数 可以直接传递
2) 多个参数 传递对象 比如传2个 2,3 需要写成 {a:2,b:3}

#### 辅助函数 
1. mapState  map映射 映射state到this的data上面  
组件使用
import {mapState} from 'vuex'
放在computed属性里面 ...mapState(可以是对象可以是数组)
对象的时候需要用箭头函数返回响应的state值 

2. mapGettes 映射getters的属性到this的data上面 
import {mapGetters} from 'vuex'
放在computed属性里面 ...mapGetters(可以是对象可以是数组)
对象的时候只是起到改名的作用 
3. mapActions  映射actions 到this的methods对象上 会把actions的方法作为this上的方法 

methods里面定义的方法怎么调用 mapActions 拿回来的方法就可以怎么调用 
```
methods:{
 ...mapActions(['ActionsAdd'])
我们可以当做 等价于下面的写法  
    ActionsAdd(){

    }
}
```
import {mapActions} from 'vuex'
用的时候放到methods 
4. mapMatutions 把mutations的方法映射到this的methods上面 可以通过this[mutations上定义的函数] 来调用对应的方法 
import {mapMutations} from 'vuex'
用的时候放在methods上面  
5. 辅助函数总结
跟数据相关的都放computed里面 mapState mapGetters 
跟方法相关的都放 methods里面 
mapActions mapMutations  
 







