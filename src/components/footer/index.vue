<template>
  <footer class="footer" v-show="showable">
      <span class="todo-count">
        <strong>{{leftCounts}}</strong>
        item{{leftCounts === 1 ? '' : 's'}} left
				</span>
    <ul class="filters">
      <li><a href="#/all" :class="selected('all')">All</a></li>
      <li><a href="#/active" :class="selected('active')">Active</a></li>
      <li><a href="#/completed" :class="selected('completed')">Completed</a></li>
    </ul>
    <button class="clear-completed" v-show="clearable" @click="clearCompleted">
      Clear completed
    </button>
  </footer>
</template>
<script>
  import {CLEAR_COMPLETED} from '../../store/mutation-types'
  export default {
    computed: {
      getters() {
        return this.$store.getters
      },
      leftCounts() {
        return this.getters.leftCounts
      },
      clearable() {
        return this.getters.clearable
      },
      showable() {
        return this.$store.state.todos.length
      },
      visibility() {

      }
    },
    methods: {
      // dispatch清除所有已完成的todo
      clearCompleted() {
        this.$store.commit({
          type: CLEAR_COMPLETED
        })
      },
      // 根据路由参数设置选中样式
      selected(visibility) {
        return this.$route.params.visibility === visibility ? 'selected' : ''
      }
    },
  }
</script>

<style>

</style>
