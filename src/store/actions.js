export const Types = {
    // LOG_IN: 'LOG_IN',
    // LOG_OUT: 'LOG_OUT',
    // UPDATE_USERNAME: 'UPDATE_USERNAME',
    // ADD_ROOMID: 'ADD_ROOMID',
    // REMOVE_ROOMID: 'REMOVE_ROOMID',
    // ADD_PASSWORD: 'ADD_PASSWORD',
    // ADD_OPTIONS: 'ADD_OPTIONS'
    UPDATE_PLAYERNAME: 'update_playername',
    ADD_ROOMCODE: 'add_roomcode',
    REMOVE_ROOMCODE: 'remove_roomcode'
  };
  
  // export const logIn = username => ({
  //   type: Types.LOG_IN,
  //   payload: username
  // });
  
  // export const logOut = () => ({
  //   type: Types.LOG_OUT
  // });
  
  // export const updateUsername = username => ({
  //   type: Types.UPDATE_USERNAME,
  //   payload: username
  // });
  
  // export const addRoomId = roomId => ({
  //   type: Types.ADD_ROOMID,
  //   payload: roomId
  // });
  
  // export const removeRoomId = () => ({
  //   type: Types.REMOVE_ROOMID
  // });
  
  // export const addPassword = password => ({
  //   type: Types.ADD_PASSWORD,
  //   payload: password
  // });
  
  // export const addOptions = options => ({
  //   type: Types.ADD_OPTIONS,
  //   payload: options
  // });

export const updatePlayerName = playerName => ({
  type: Types.UPDATE_PLAYERNAME,
  payload: playerName
})

export const addRoomCode = roomCode => ({
  type: Types.ADD_ROOMCODE,
  payload: roomCode
})

export const removeRomeCode = () => ({
  type: Types.REMOVE_ROOMCODE
})