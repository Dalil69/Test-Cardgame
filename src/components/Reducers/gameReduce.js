import gameReducer from './Reducers/gameReduce';

const initialState = {
    // Définissez l'état initial de votre jeu
  };
  
  const localGameReducer = (state = initialState, action) => {
    switch (action.type) {
      // Gérez différentes actions ici
      default:
        return state;
    }
  };
  
  export default localGameReducer;
  
  
