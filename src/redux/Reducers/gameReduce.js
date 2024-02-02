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
        // Initialisation du jeu
      };
    case actionTypes.PLAY_CARD:
      // Logique pour jouer une carte
      const updatedPlayerHand = state.playerHand.filter(card => card.id !== action.payload.cardId);
      return {
        ...state,
        playerHand: updatedPlayerHand,
      };
    case actionTypes.MOVE_CARD_TO_BOARD:
      // Trouvez la carte dans la main du joueur
      const cardToMove = state.playerHand.find(card => card.id === action.payload.cardId);
      if (!cardToMove) return state; // Si la carte n'est pas trouvée, ne faites rien

      return {
        ...state,
        playerHand: state.playerHand.filter(card => card.id !== action.payload.cardId), // Retirez la carte de la main
        battlefield: [...state.battlefield, cardToMove], // Ajoutez la carte au champ de bataille
      };
    case actionTypes.SET_CARD_POSITION:
      // Cette action pourrait ajuster la position d'une carte sur le champ de bataille
      // Implémentation dépendante de la structure de votre état 'battlefield'
      return state; 
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
