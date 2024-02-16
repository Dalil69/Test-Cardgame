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
      // Logique pour démarrer le jeu
      return {
        ...state,
        isGameStarted: true,
      };
    case actionTypes.PLAY_CARD:
      // Logique pour jouer une carte de la main du joueur
      const updatedPlayerHand = state.playerHand.filter(card => card.id !== action.payload.cardId);
      return {
        ...state,
        playerHand: updatedPlayerHand,
      };
    case actionTypes.MOVE_CARD_TO_BOARD:
      // Logique pour déplacer une carte vers le plateau de jeu
      const cardToMove = state.playerHand.find(card => card.id === action.payload.cardId);
      if (!cardToMove) return state; // Si la carte n'est pas trouvée, ne faites rien

      // Supposons que 'position' est un objet avec { x, y } pour simplifier
      // Cette partie peut être ajustée selon votre logique de positionnement sur le plateau
      const newBattlefield = [...state.battlefield, { ...cardToMove, position: action.payload.position }];

      return {
        ...state,
        playerHand: state.playerHand.filter(card => card.id !== action.payload.cardId), // Retirez la carte de la main
        battlefield: newBattlefield, // Ajoutez la carte au champ de bataille avec sa position
      };
    case actionTypes.SET_CARD_POSITION:
      // Logique optionnelle pour ajuster la position d'une carte sur le champ de bataille
      // Cette partie dépend de la structure exacte de votre état 'battlefield' et des besoins spécifiques de votre jeu
      return state;
    case actionTypes.END_TURN:
      // Logique pour finir le tour et passer au joueur suivant
      return {
        ...state,
        currentPlayerTurn: state.currentPlayerTurn === 1 ? 2 : 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
