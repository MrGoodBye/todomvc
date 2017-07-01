<template>
  <section class="main">
    <!--全选按钮-->
    <input type="checkbox"
           class="toggle-all"
           :checked="allDone"
           @click="toggleAll"
           v-show="toggle_all_able">
    <!--全选按钮结束-->

    <!--todo列表-->
    <ul class="todo-list">
      <li class="todo"
          :class="{completed: todo.completed,editing: todo.id === editingId}"
          v-for="todo in todos">
        <div class="view">
          <input type="checkbox" class="toggle" :checked="todo.completed" @click="toggle(todo.id)">
          <!--双击进入编辑状态-->
          <label @dblclick="edit(todo.id)">{{todo.title}}</label>
          <button class="destroy" @click="destroy(todo.id)"></button>
        </div>
        <!--进入编辑状态后,匹配的todo显示该输入框,用于编辑-->
        <!--mouseover时输入框获取焦点,提高用户体验-->
        <!--按下回车,以及失去焦点时触发保存事件-->
        <input
          type="text"
          class="edit"
          :value="todo.title"
          v-show="todo.id === editingId"
          @mouseover="focus($event)"
          @keyup.enter="save"
          @blur="save">
      </li>
    </ul>
    <!--todo列表结束-->
  </section>
</template>
<script>
  import {TOGGLE_TODO, TOGGLE_ALL, DELETE_TODO, EDITING, SAVE} from '../../store/mutation-types'
  import * as visibility from '../../router/params'
  export default {
    computed: {
      // 根据路由参数visibility过滤todo列表,达到切换路由的效果
      todos() {
        switch (this.$route.params.visibility) {
          case visibility.ALL:
            return this.$store.state.todos;
            break;
          case visibility.ACTIVE:
            return this.$store.state.todos.filter(todo => !todo.completed);
            break;
          case visibility.COMPLETED:
            return this.$store.state.todos.filter(todo => todo.completed);
          default:
            return this.$store.state.todos;
            break
        }
      },
      // 计算全选按钮是否选中
      // 通过store的getters计算而来
      allDone() {
        return this.$store.getters.allDone
      },
      // 显示/隐藏全选按钮
      // 当没有todos时,隐藏切换按钮
      // TODO 由于该项目使用路由的参数来过滤todos,并不是切换组件,
      // 所以不同路由中,用store.getters.allDone来显示/隐藏全选按钮,并不能达到预期效果
      toggle_all_able() {
        return this.$store.state.todos.length
      },
      // 将dispatch方法作为计算属性存储起来
      // 便于多次调用
      commit() {
        return this.$store.commit
      },
      // 正在编辑的todo的id
      editingId() {
        return this.$store.state.editingId
      }
    },
    methods: {
      // dispatch修改todo是否完成状态
      // 将todo的id作为payload,便于定位todos中对应的todo
      toggle(id){
        // this.commit即为this.$store.commit
        this.commit({
          type: TOGGLE_TODO,
          id
        })
      },
      // dispatch切换所有todo的完成状态
      toggleAll(e) {
        // this.commit即为this.$store.commit
        this.commit({
          type: TOGGLE_ALL,
          flag: e.target.checked
        })
      },
      // dispatch根据id删除todo
      // 无法使用delete为方法名,会报错:delete为javascript内置的运算符
      destroy(id) {
        // this.commit即为this.$store.commit
        this.commit({
          type: DELETE_TODO,
          id
        })
      },
      // 双击编辑todo,正在编辑todo
      // 根据正在编辑的editingId添加相应样式来显示编辑框,隐藏label框
      edit(id) {
        this.commit({
          type: EDITING,
          id
        })
      },
      // 编辑框获取焦点
      focus(e) {
        e.target.focus()
      },
      // 按下回车以及失去焦点时dispatch保存事件
      // TODO 此处无论todo的是是否改变都会产生mutation,影响性能,请完善!
      save(e) {
        this.commit({
          type: SAVE,
          value: e.target.value
        })
      }
    }
  }
</script>

<style>

</style>
