import {createSlice, PayloadAction, CaseReducer} from '@reduxjs/toolkit';

interface task {
  id: number;
  text: string;
}

export type InitialState = {
  todo: task[];
};

const initialState: InitialState = {
  todo: [],
};

type CountReducer<Payload> = CaseReducer<InitialState, PayloadAction<Payload>>;

export const addTask: CountReducer<{text: string}> = (state, action) => {
  const newTask = {
    id: Math.random(),
    text: action.payload.text,
  };
  console.log('task', action);
  state.todo.push(newTask);
  console.log('task 11', state.todo);
  return state;
};

export const deleteTask = (
  state: InitialState,
  action: PayloadAction<{id: number}>,
) => {
  console.log('state', state);
  console.log('action', action);
  const response = state.todo.filter(item => item.id !== action.payload.id);
  console.log('response', response);
  state.todo = response;

  return state;
};

export const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask,
    deleteTask,
  },
});
export default todoSlice;
