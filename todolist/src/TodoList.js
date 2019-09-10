import React,{Component} from 'react';
import TodoItem from './TodoItem'
// class组件
class TodoList extends Component {
  // state // es7
  constructor(props) { // es6 定义一个储存数据的地方 当TOdoList组件刚被初始化的时候，就触发constructor
    super(props)
    this.state = { // 数据项，存储数据内容
      list:[
        11,
        22
      ],
      inputVal:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDes = this.handleDes.bind(this)
  }
  handleAdd() {
    this.setState({ //react 提供修改state的数据
      list:[...this.state.list,this.state.inputVal],
      inputVal:''
      // 相当于 [11,22,33] 新的list会包含老的list里面的内容，同时也会增加新的内容
    })

    // this.state.list.push(33) 不能直接改变state里面的数据，需要条用react提供的setState方法，使用 es6的扩展运算符
    console.log(222); 
  }
  handleChange (e) {
    this.setState({ //react 提供修改state的数据
      inputVal:e.target.value
    })
    console.log(e.target.value);
  }
  handleDes (index) {
    console.log(index);
    const list = [...this.state.list]; // 一般不要直接修改stste里面的数据，先拷贝一份。
    list.splice(index,1)
    this.setState({
      list
    })
  }
  render () {
    return (
      <div>
        <input value={this.state.inputVal} onChange={this.handleChange}></input>
        {/* 如果不加 bind(this) 这个click方法里面的this指向的是button里面的内容，加上之后this指向整个组件的内容   */}
        <button onClick={this.handleAdd}>add</button>
        <div>
          <ul>
            {this.state.list.map((item,index) => {  
              // 父组件和子组件通讯，父组件通过属性的形式向子组件传递参数
              // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
              return <TodoItem des={this.handleDes} key={index} conten={item} index={index}></TodoItem>
              // return <li key={index} onClick={this.handleDes.bind(this,index)}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default TodoList;