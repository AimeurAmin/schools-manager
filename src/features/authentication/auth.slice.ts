import { createSlice } from "@reduxjs/toolkit"
import cookie from 'js-cookie';

const initialState: { user: any, token: string | null} = { user: null, token: null };

 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loadSession: (state) => {
        const token = localStorage.getItem('token');
        state.token = token;
      },
      setCredentials: (state, action) => {
        const { token} = action.payload
        state.token = token
        cookie.set('token', token, { expires: 1000 }) // for the middleware
        localStorage.setItem('token', token) // to keep token in headers
      },
      logOut: (state, action: {payload?: any}) => {
        state.user = null
        state. token = null
        cookie.remove('token')
      }
    }
})

export const { loadSession, setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentTokenr = (state: any) => state.auth.token
