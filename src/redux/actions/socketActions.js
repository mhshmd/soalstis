import * as types from './types'
//redux store
import store from '../store'

const dispatch = store.dispatch

//set socket
export const setSocket = (socket) => {
    dispatch( { 
        type: types.SET_SOCKET,
        payload: { socket: socket },
     } );
}
//destroy socket
export const destroySocket = (socket) => {
    dispatch( { 
        type: types.DESTROY_SOCKET,
        payload: { socket: null },
     } );
}