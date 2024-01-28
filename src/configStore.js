import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer'; // Assurez-vous d'avoir un reducer

const store = configureStore({
  reducer: {
    game: gameReducer,
    // Ajoutez d'autres reducers ici
  },
});

export default store;
