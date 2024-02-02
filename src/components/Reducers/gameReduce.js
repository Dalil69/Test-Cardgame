import { actionTypes } from '../../redux/actions/gameActions';

const initialState = {
  isGameStarted: false,
  currentPlayerTurn: 1,
  
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        isGameStarted: true,
        // Initialisation du jeu
      };
    case actionTypes.PLAY_CARD:
      // Logique pour jouer une carte
      return {
        ...state,
       
      };
    case actionTypes.END_TURN:
      return {
        ...state,
        currentPlayerTurn: state.currentPlayerTurn === 1 ? 2 : 1,
        // Logique pour finir le tour
      };
    default:
      return state;
  }
};

export default gameReducer;