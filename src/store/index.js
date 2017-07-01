// 使用vuex创建store
import Vue from 'vue'
import Vuex from 'vuex'
import {ALL} from '../assets/visibility'
import * as types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
  // 在state中最好将所有会用到的属性都初始化,在组件中给state添加新的属性会比较麻烦
  state: {
    todos: [],// todo列表
    visibility: ALL,// 显示状态:显示所有,显示已完成,显示未完成
    editingId: ''// 正在编辑的todo的id
  },
  mutations: {
    /**
     * 添加todo
     * @param state
     * @param payload
     */
      [types.ADD_TODO](state, payload) {
      // 将新创建的todo压入todos头部
      state.todos.unshift({
        id: Math.random(),// 定义一个id,便于编辑,删除等操作
        title: payload.value,
        completed: false
      });
    },
    /**
     * 根据id切换todo的completed属性
     * @param state
     * @param payload
     */
      [types.TOGGLE_TODO](state, payload){
      for (let todo of state.todos) {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed;
          break;
        }
      }
    },
    /**
     * 切换所有todo的完成状态
     * @param state
     * @param payload
     */
      [types.TOGGLE_ALL](state, payload){
      state.todos.forEach(todo => todo.completed = payload.flag)
    },
    /**
     * 根据id删除todo
     * @param state
     * @param payload
     */
      [types.DELETE_TODO](state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload.id)
    },
    /**
     * 清除所有已完成的todo
     * @param state
     */
      [types.CLEAR_COMPLETED](state) {
      // Array.prototype.filter方法为一个纯函数,不会给调用者本身造成副作用(即调用filter的数组并不会改变),
      // 所以必须重新赋值
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    /**
     * 编辑todo,保存正在编辑的todo的id
     * @param state
     * @param payload
     */
      [types.EDITING](state, payload) {
      state.editingId = payload.id
    },
    /**
     * 保存编辑,即更新对应的todo
     * @param state
     * @param payload
     */
      [types.SAVE](state, payload) {
      for (let todo of state.todos) {
        if (todo.id === state.editingId) {
          todo.title = payload.value;
          break;
        }
      }
      // 更新完之后将正在编辑的id属性editingId重置为空
      state.editingId = '';
    }
  },
  // store的计算属性
  getters: {
    // 计算未完成个数
    leftCounts: (state) => {
      return state.todos.reduce((prev, todo) => {
        return todo.completed ? prev : prev + 1
      }, 0)
    },
    // 计算是否可清除,即是否存在已完成todo
    clearable: (state, getters) => {
      return state.todos.length !== getters.leftCounts
    },
    // 计算是否都完成
    // 用于1.是否处于全选状态(全选按钮是否已选中),
    // 2.显示/隐藏全选按钮
    // 当todos为空时,不显示;
    // 当未完成的todo个数leftCounts为0时,不显示;
    // TODO 该项目中使用路由的方法使得无法使用allDone属性来判断显示/隐藏全选按钮,请查证
    allDone: (state, {leftCounts}) => {
      return state.todos.length && !leftCounts
    }
  },
  // 非生产环境下使用严格模式
  strict: process.env.NODE_ENV !== 'production'
})
