import React, { Component } from 'react'
import PropTypes from 'prop-types';
// 界面初始化先执行这个里面的数据

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
	render () {
    const { content } = this.props;
		return (
       <div onClick={this.handleClick}>{content}</div>
      )
	}
  handleClick () {
    const { dele, index } = this.props;
    dele(index)
  }
}
TodoItem.propTypes = {
  content:PropTypes.string,
  index:PropTypes.number
}
export default TodoItem;
		