import gameReducer from './reducers/gameReducer';


const initialState = {
    // Définissez l'état initial de votre jeu
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      // Gérez différentes actions ici
      default:
        return state;
    }
  };
  
  export default gameReducer;
  
