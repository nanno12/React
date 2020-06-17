import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './todoItem'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
			list: []
    }
    this.handleDele = this.handleDele.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
	}
	render () {
		return (
			<Fragment>
				<label htmlFor="nuozi">输入内容</label>
				<input id="nuozi" value= {this.state.inputVal}
					onChange={this.handleChange}/>
				<button onClick={this.handleClick}>提交</button>
				<ul>
          { this.getTodoItem() }
				</ul>
			</Fragment>
		)
  }
  getTodoItem() {
    return this.state.list.map((item,index) => {
      return (
        <TodoItem key={index} content={item} index={index} dele={this.handleDele}/>
      )
    })
  }
  // 界面更新之后执行
  componentDidMount () {
    axios.get('/api/todolist').then((res) => {
      // alert('succe')
      console.log('res',res.data);
      this.setState(() => ({
        list:[...res.data]
      }))
    }).catch(() =>{
      alert('err')
    })
  }
	handleChange(e) {
		console.log(e.target.value)
		const value = e.target.value
    this.setState(() => ({
      inputVal:value
    }))
	}
	handleClick() {
    this.setState((prevState) => ({
    	// console.log('prevState',prevState)
        	list:[...prevState.list,prevState.inputVal],
        	inputVal: ''
        }))
	}
	handleDele(index) {

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index,1)
      return {
        list
      }
    })
  }
}
export default TodoList;
