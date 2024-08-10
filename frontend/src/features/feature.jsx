import { createSlice } from '@reduxjs/toolkit'

export const featureUse = createSlice({
  name: 'featureUse',
  initialState: {
    value: 0,
    darkView:1,
    tokenGen:"",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    viewDark:(state)=>{
      if(state.darkView){
        state.darkView-=1
      }else{
        state.darkView+=1
      }
    },
    tokenU:(state,action)=>{
      state.tokenGen=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,viewDark,tokenU } = featureUse.actions

export default featureUse.reducer