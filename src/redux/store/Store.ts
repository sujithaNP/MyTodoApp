import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../slice/Slice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer.reducer,
  },
});
