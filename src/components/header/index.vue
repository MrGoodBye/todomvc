<template>
  <header class="header">
    <h1>todos</h1>
    <input
      placeholder="What needs to be done?"
      class="new-todo"
      :value="newTodo"
      @change="changeInput"
      @keyup.enter="add">
  </header>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {ADD_TODO} from '../../store/mutation-types'
  export default {
    data(){
      return {
        newTodo: ''
      }
    },
    methods: {
      // 回车按钮dispatch添加todo
      add() {
        // 判断newTodo是否为空
        // 为空,则不dispatch
        if (this.newTodo) {
          this.$store.commit({
            type: ADD_TODO,
            value: this.newTodo
          });
          this.newTodo = ''
        }
      },

      // 输入框的change事件修改newTodo
      changeInput(e) {
        this.newTodo = e.target.value
      }
    }
  }
</script>

<style>

</style>
