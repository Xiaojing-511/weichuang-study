import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    num: 2
  },
  // 就像计算属性一样，通过属性调用时，getter 的返回值会根据它的依赖被缓存起来，
  // 且只有当它的依赖值发生了改变才会被重新计算
  // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
  getter: {
    result(state){
      return state.count * state.num ;
    }
  },
  // 处理同步的方法
  // 在 mutation 中混合异步调用会导致你的程序很难调试 ，所以mutation 都是同步事务
  mutations: {
    add(state){
      state.count++;
    },
    reduce(state){
      state.count--;
    }
  },
  // 处理异步的方法
  // Action 提交的是 mutation，而不是直接变更状态
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    // 因此你可以调用 context.commit 提交一个 mutation
    // reduceFun(context){
    //   setTimeout(() => {
    //     context.commit('reduce');
    //   }, 2000);
    // },

    // 实践中，我们会经常用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）
    // 将commit赋值为 context.commit
    reduceFun({commit}){
      setTimeout(() => {
        commit('reduce');
      }, 2000);
    }

  },
  modules: {
  }
})
