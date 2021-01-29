import { Types } from './actions';

export const defaultState = {
  playerName: '',
  roomCode: '',
  roomAction: null,
  socket: null
};

const store = (state = defaultState, action) => {
  switch (action.type) {

    case Types.UPDATE_PLAYERNAME: {
      const playerName = action.payload;
      return { ...state, playerName };
    }

    case Types.CREATE_WITH_ROOMCODE: {
      const roomCode = action.payload;
      return { ...state, roomCode, roomAction: "create" };
    }

    case Types.JOIN_WITH_ROOMCODE: {
      const roomCode = action.payload;
      return { ...state, roomCode, roomAction: "join" };
    }


    case Types.REGISTER_SOCKET: {
      const socket = action.payload;
      return { ...state, socket };
    }

    case Types.UNREGISTER_SOCKET: {
      const socket = state.socket
      if(socket){
        socket.close();
      }
      return { ...state, socket: null };
    }

    case Types.REMOVE_ROOMCODE: {
      return { ...state, roomCode: '' };
    }

    default:
      return state;
  }
};

export default store;