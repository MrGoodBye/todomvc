<template>
  <section class="main">
    <input type="checkbox"
           class="toggle-all"
           :checked="allDone"
           @click="toggleAll"
           v-show="toggle_all_able">
    <ul class="todo-list">
      <li class="todo" :class="{completed: todo.completed,editing: todo.id === editingId}" v-for="todo in todos">
        <div class="view">
          <input type="checkbox" class="toggle" :checked="todo.completed" @click="toggle(todo.id)">
          <label @dblclick="edit(todo.id)">{{todo.title}}</label>
          <button class="destroy" @click="destroy(todo.id)"></button>
        </div>
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
  </section>
</template>
<script>
  import {TOGGLE_TODO, TOGGLE_ALL, DELETE_TODO, EDITING, SAVE} from '../../store/mutation-types'
  import * as visibility from '../../router/params'
  export default {
    computed: {
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
      // 是否都已完成
      // 通过store的getters计算而来
      allDone() {
        return this.$store.getters.allDone
      },
      // 是否可切换已完成
      // 当没有todos时,隐藏切换按钮
      toggle_all_able() {
        return this.$store.state.todos.length
      },
      // 将dispatch方法作为计算属性存储起来
      // 便于多次调用
      commit() {
        return this.$store.commit
      },
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
