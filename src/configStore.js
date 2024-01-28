import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';

const store = configureStore({
  reducer: {
    game: gameReducer,
    // autres reducers ici
  },
});

export default store;

