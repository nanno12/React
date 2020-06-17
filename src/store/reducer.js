import { CHANGE_INPUT_VALUE, DELE_TODO_LIEM, ADD_TODO_LIEM} from './actionTypes'
const defaultState = {
  inputValue: '',
  list:[]
}
// reducer 可以接收state，但是不能修改state
export default ( state = defaultState , action ) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_LIEM) {
    const newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue === '') return
    newState.list.push(newState.inputValue)
    console.log(newState);
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELE_TODO_LIEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  // 整个reducer数据，图书馆所有的书籍
  return state
}
