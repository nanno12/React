import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoTable extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div>
          <Input placeholder="Basic usage" value={this.state.inputValue} style={{width:"300px"}}/>
          <Button type="primary" >Button</Button>
          <List
            style={{width:"300px"}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                 {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}
export default TodoTable
