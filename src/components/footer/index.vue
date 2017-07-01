<template>
  <footer class="footer" v-show="showable">
    <!--未完成个数-->
    <span class="todo-count">
        <strong>{{leftCounts}}</strong>
        item{{leftCounts === 1 ? '' : 's'}} left
				</span>
    <!--未完成个数结束-->

    <!--路由切换-->
    <ul class="filters">
      <li><a href="#/all" :class="selected('all')">All</a></li>
      <li><a href="#/active" :class="selected('active')">Active</a></li>
      <li><a href="#/completed" :class="selected('completed')">Completed</a></li>
    </ul>
    <!--路由切换结束-->

    <!--清除已完成按钮-->
    <button class="clear-completed" v-show="clearable" @click="clearCompleted">
      Clear completed
    </button>
    <!--清除已完成按钮结束-->
  </footer>
</template>
<script>
  import {CLEAR_COMPLETED} from '../../store/mutation-types'
  export default {
    computed: {
      // 映射this.getters为store.getters
      getters() {
        return this.$store.getters
      },
      // 映射this.leftCounts为store.getters.leftCounts
      // 计算
      leftCounts() {
        return this.getters.leftCounts
      },
      // 显示/隐藏清除已完成按钮
      clearable() {
        return this.getters.clearable
      },
      // 显示/隐藏该组件
      // todos为空,则隐藏该组件
      showable() {
        return this.$store.state.todos.length
      }
    },
    methods: {
      // dispatch清除所有已完成的todo
      clearCompleted() {
        this.$store.commit({
          type: CLEAR_COMPLETED
        })
      },
      // 匹配路由参数设置选中样式
      // url格式: /:visibility,所以可以访问到visibility参数
      selected(visibility) {
        return this.$route.params.visibility === visibility ? 'selected' : ''
      }
    },
  }
</script>

<style>

</style>
