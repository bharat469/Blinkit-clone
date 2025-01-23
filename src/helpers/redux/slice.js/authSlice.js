import { createSlice } from "@reduxjs/toolkit"

const inititalState={
    userToken:''
}

 const AuthSlice= createSlice({
    name:'auth',
    initialState:inititalState,
    reducers:{
     saveUserToken(state,action){
        state.userToken=action.payload
     },
     resetAll(state,action){
        state.userToken=''
     }
    }

})

export const {saveUserToken,resetAll}=AuthSlice.actions 
export default AuthSlice.reducer