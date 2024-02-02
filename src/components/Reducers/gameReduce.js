import { actionTypes } from '../../redux/actions/gameActions';

const initialState = {
  isGameStarted: false,
  currentPlayerTurn: 1,
  playerHand: [
    { id: 1, name: "Carte 1", cost: 1, strength: 2, health: 3 },
    { id: 2, name: "Carte 2", cost: 2, strength: 3, health: 2 },
    // Ajoutez plus de cartes selon le besoin
  ],
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
        const updatedPlayerHand = state.playerHand.filter(card => card.id !== action.payload.cardId);
        return {
          ...state,
          playerHand: updatedPlayerHand,
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