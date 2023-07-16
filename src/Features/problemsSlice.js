import { createSlice } from '@reduxjs/toolkit'

const initialProblemSavedState = {
  isSaved:[],
}

export const problemsSlice = createSlice({
  name: 'isProblemSaved',
  initialState:initialProblemSavedState,
  reducers: {
    save:(state,actions)=>{
     state.isSaved.push(actions.payload);
    },

    remove:(state,actions)=>{
     state.isSaved=state.isSaved.filter((name)=>name!==actions.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { save,remove } = problemsSlice.actions

export default problemsSlice.reducer