import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Reducers/gameReduce';

const store = configureStore({
  reducer: {
    game: gameReducer,
    // autres reducers ici
  },
});

export default store;