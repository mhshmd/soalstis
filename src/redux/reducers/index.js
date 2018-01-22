import { combineReducers } from 'redux'

import socket from './socketReducer'
import user from './userReducer'

export default combineReducers({
    socket,
    user
})