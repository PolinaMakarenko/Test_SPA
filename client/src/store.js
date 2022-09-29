import { configureStore } from '@reduxjs/toolkit';
import ListSlice from './components/App/ListSlice';


export default configureStore({
    reducer: {
      list: ListSlice,
    },
  });

  