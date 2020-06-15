import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: '',
			list: []
		}
	}
	render () {
		return (
			<Fragment>
				<label htmlFor="nuozi">输入内容</label>
				<input id="nuozi" value= {this.state.inputVal} 
					onChange={this.handleChange.bind(this)}/>
				<button onClick={this.handleClick.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index) => {
							return (
								<div> <TodoItem key="index" content={item} index={index} dele={this.handleDele.bind(this)}/></div>
							)
						})
					}
				</ul>
			</Fragment>
		)
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
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
		console.log(index)
	}
}
export default TodoList;