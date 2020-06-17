import { CHANGE_INPUT_VALUE, DELE_TODO_LIEM, ADD_TODO_LIEM} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})
export const getAddAction = () => ({
  type:ADD_TODO_LIEM
})
export const getDeleAction = (index) => ({
  type:DELE_TODO_LIEM,
  index
})
