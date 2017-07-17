import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 开发环境下使用devToolsExtension来激活Google的redux开发工具
// TODO 生产环境若使用其他浏览器可能出现问题.
export default createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
))
