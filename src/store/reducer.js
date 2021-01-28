import { Types } from './actions';

export const defaultState = {
  playerName: '',
  cachedRoomCode: '',
};

const store = (state = defaultState, action) => {
  switch (action.type) {

    case Types.UPDATE_PLAYERNAME: {
      const playerName = action.payload;
      return { ...state, playerName };
    }

    case Types.UPDATE_CACHEDROOMCODE: {
      const cachedRoomCode = action.payload;
      return { ...state, cachedRoomCode };
    }

    case Types.REMOVE_ROOMCODE: {
      return { ...state, cachedRoomCode: '' };
    }

    default:
      return state;
  }
};

export default store;