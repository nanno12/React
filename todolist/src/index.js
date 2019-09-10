import React from 'react';
import ReactDOM from 'react-dom';
// 大写开头都是组件
import TodoList from './TodoList';
// 把自定义组件渲染到 root 标签里面
ReactDOM.render(<TodoList/>, document.getElementById('root'));

