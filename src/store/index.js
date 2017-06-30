// 使用vuex创建store
import Vue from 'vue'
import Vuex from 'vuex'
import {ALL} from '../assets/visibility'
import * as types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    visibility: ALL,
    editingId: ''
  },
  mutations: {
    /**
     * 添加todo
     * @param state
     * @param payload
     */
      [types.ADD_TODO](state, payload) {
      state.todos.unshift({
        id: Math.random(),
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
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    [types.EDITING](state, payload) {
      state.editingId = payload.id
    },
    [types.SAVE](state, payload) {
      for (let todo of state.todos) {
        if (todo.id === state.editingId) {
          todo.title = payload.value;
          break;
        }
      }
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
    allDone: (state, {leftCounts}) => {
      return state.todos.length && !leftCounts
    }
  },
  strict: process.env.NODE_ENV !== 'production'// 非生产环境下使用严格模式
})
