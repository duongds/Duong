import { getUserInfoAPI } from '@/api/users'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAC.fulfilled, (state, action) => {
      state.profile = action.payload
    })
  },
})

export const getUserInfoAC = createAsyncThunk('user/fetchUserProfile', async () => {
  const response = await getUserInfoAPI()
  return response.data
})

// Action creators are generated for each case reducer function
export const { setProfile } = userSlices.actions

export default userSlices.reducer
