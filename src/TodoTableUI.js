import React from 'react'
import { Input, Button, List } from 'antd'
const TodoTableUI = (props)=> {
  return (
    <div>
      <div>
        <Input placeholder="Basic usage"
          onChange={props.hadleChange}
          value={props.inputValue}
          style={{width:"300px"}}/>
        <Button type="primary" onClick={props.hadleClick}>Button</Button>
        <List
          style={{width:"300px"}}
          bordered
          dataSource={props.list}
          renderItem={(item) => (
            <List.Item onClick={(index) => {props.hadleDele(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
export default TodoTableUI
