import { actionTypes } from '../actions/gameActions';

const initialState = {
  isGameStarted: false,
  currentPlayerTurn: 1,
  playerHand: [
    { id: 1, name: "Carte 1", cost: 1, strength: 2, health: 3 },
    { id: 2, name: "Carte 2", cost: 2, strength: 3, health: 2 },
    // Ajoutez plus de cartes selon le besoin
  ],
  battlefield: [], // Ajout pour représenter les cartes sur le champ de bataille
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        isGameStarted: true,
      };
    case actionTypes.PLAY_CARD:
      const updatedPlayerHandForPlay = state.playerHand.filter(card => card.id !== action.payload.cardId);
      return {
        ...state,
        playerHand: updatedPlayerHandForPlay,
      };
    case actionTypes.MOVE_CARD_TO_BOARD:
      const cardToMove = state.playerHand.find(card => card.id === action.payload.cardId);
      if (!cardToMove) return state;

      const newBattlefieldForMove = [...state.battlefield, cardToMove];
      const updatedPlayerHandForMove = state.playerHand.filter(card => card.id !== action.payload.cardId);

      return {
        ...state,
        playerHand: updatedPlayerHandForMove,
        battlefield: newBattlefieldForMove,
      };
    case actionTypes.CARD_DROPPED:
      const { cardId, slotId } = action.payload;
      const cardToDrop = state.playerHand.find(card => card.id === cardId);
      if (!cardToDrop) return state;

      const updatedBattlefieldForDrop = state.battlefield.map((slot, index) => index === slotId ? cardToDrop : slot);
      const updatedPlayerHandForDrop = state.playerHand.filter(card => card.id !== cardId);

      return {
        ...state,
        playerHand: updatedPlayerHandForDrop,
        battlefield: updatedBattlefieldForDrop,
      };
    case actionTypes.SET_CARD_POSITION:
      // Logique optionnelle pour ajuster la position d'une carte sur le champ de bataille
      return state;
    case actionTypes.END_TURN:
      return {
        ...state,
        currentPlayerTurn: state.currentPlayerTurn === 1 ? 2 : 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
