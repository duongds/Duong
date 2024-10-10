import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  toast: {
    duration?: number
    type?: string
    show: boolean
    title?: string
    message: string
  }
}

const initialState: CommonState = {
  toast: {
    duration: 2000,
    show: false,
    message: '',
  },
}

export const commonSlices = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setToast: (
      state,
      action: PayloadAction<{
        title?: string
        message: string
        show: boolean
        duration?: number
        type?: 'success' | 'error'
      }>
    ) => {
      state.toast = { ...initialState.toast, ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToast } = commonSlices.actions

export default commonSlices.reducer
