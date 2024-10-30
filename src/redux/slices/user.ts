import { getUserInfoAPI } from '@/api/users'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  profile: any
  loading: boolean
  error: string
}

const initialState: UserState = {
  profile: {},
  loading: false,
  error: '',
}

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoAC.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getUserInfoAC.fulfilled, (state, action) => {
      state.profile = action.payload
      state.loading = false
    })
    builder.addCase(getUserInfoAC.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Error system'
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
