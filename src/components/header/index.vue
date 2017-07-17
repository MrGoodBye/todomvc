<template>
  <header class="header">
    <h1>todos</h1>
    <!--新增todo-->
    <!--keyup事件修改输入框的值-->
    <!--回车触发添加事件-->
    <!--TODO 若使用change事件触发changeInput事件,-->
    <!--会导致连续两次添加同样的todo时,第二次无法添加的错误效果,请查证-->
    <input
      placeholder="What needs to be done?"
      class="new-todo"
      :value="newTodo"
      @keyup="changeInput"
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
        // 修改后必须将元素的value置为空,否则无法会造成连续输入两个相同的值无法触发change事件
        e.target.value = null
      }
    }
  }
</script>
