export const Types = {
    UPDATE_PLAYERNAME: 'update_playername',
    CREATE_WITH_ROOMCODE: 'create_roomcode',
    JOIN_WITH_ROOMCODE: 'join_with_roomcode',
    REGISTER_SOCKET: 'register_socket',
    UNREGISTER_SOCKET: 'unregister_socket',
    REMOVE_ROOMCODE: 'remove_roomcode'
  };
  
export const updatePlayerName = playerName => ({
  type: Types.UPDATE_PLAYERNAME,
  payload: playerName
})

export const createWithRoomCode = roomCode => ({
  type: Types.CREATE_WITH_ROOMCODE,
  payload: roomCode
})

export const joinWithRoomCode = roomCode => ({
  type: Types.JOIN_WITH_ROOMCODE,
  payload: roomCode
})

export const registerSocket = socket => ({
  type: Types.REGISTER_SOCKET,
  payload: socket
})

export const unregisterSocket = () => ({
  type: Types.UNREGISTER_SOCKET
})

export const removeRomeCode = () => ({
  type: Types.REMOVE_ROOMCODE
})