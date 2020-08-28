<template>
  <div>
    <p>{{count}}</p>
    <p>{{result}}</p>
    <button @click="add">+1</button>
    <button @click="reduceFun">-1</button>
  </div>
</template>
<script>
// 由于 store 中的状态是响应式的，
// 在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
// 触发变化也仅仅是在组件的 methods 中提交 mutation。
// 每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM

import { mapState, mapGetter, mapMutations, mapActions } from "vuex";
export default {
  // 一个组件的 data 选项必须是一个函数  因此每个实例可以维护一份被返回对象的独立的拷贝
  data() {
    return {};
  },
  computed: {
    //   为组件创建计算属性以返回 Vuex store 中的状态
    ...mapState(["count"]),

    // 为组件创建计算属性以返回 getter 的返回值
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // 将this.result 映射为 this.$store.getters.result
    ...mapGetter(["result"])

    // 如果你想将一个 getter 属性另取一个名字，使用对象形式
    // ...mapGetters({
    // // 把 `this.result` 映射为 `this.$store.getters.result`
    // doneCount: 'doneTodosCount'
    // })
  },
  methods: {
    //   创建组件方法提交 mutation
    // 将 `this.add()` 映射为 `this.$store.commit('add')`
    ...mapMutations(["add"]),

    // 可以取另一个名字
    //  将 `this.add1()` 映射为 `this.$store.commit('add')`
    // ...mapMutations({
    //   add1: 'add' 
    // }),

    // 创建组件方法分发 action
    ...mapActions(["reduceFun"])
  }
};
</script>