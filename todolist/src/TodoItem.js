import React from 'react'
class TodoItem extends React.Component {
  handleDes (index) {
    this.props.des(index) // 接收父组件里面的方法
  }
  render () {
    const { conten, index} = this.props
    return (
      // <div onClick={this.handleDes.bind(this,this.props.index)}>
      <div onClick={this.handleDes.bind(this,index)}>
        {/* 子组件通过props来接收父组件传递过来的参数 */}
        {conten}
      </div>
    )
  }
}
export default TodoItem;