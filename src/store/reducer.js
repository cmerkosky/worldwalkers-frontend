import { Types } from './actions';

export const defaultState = {
  playerName: '',
  roomCode: '',
};

const store = (state = defaultState, action) => {
  switch (action.type) {

    case Types.UPDATE_PLAYERNAME: {
      const playerName = action.payload;
      return { ...state, playerName };
    }

    case Types.ADD_ROOMCODE: {
      const roomCode = action.payload;
      return { ...state, roomCode };
    }

    case Types.REMOVE_ROOMCODE: {
      return { ...state, roomCode: '' };
    }

    default:
      return state;
  }
};

export default store;