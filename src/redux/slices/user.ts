import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  profile: any
}

const initialState: UserState = {
  profile: {},
}

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<boolean>) => {
      state.profile = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProfile } = userSlices.actions

export default userSlices.reducer
