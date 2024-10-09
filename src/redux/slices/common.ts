import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  isLoading: boolean
  triggerTime: undefined | number
  toast: {
    duration?: number
    type?: string
    show: boolean
    title?: string
    message: string
  }
}

const initialState: CommonState = {
  isLoading: false,
  toast: {
    duration: 2000,
    show: false,
    message: '',
  },
  triggerTime: 0,
}

export const commonSlices = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload
    },
    setTriggerTime: (state: RootState, action: PayloadAction<any>) => {
      state.triggerTime = action.payload
    },
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
export const { setLoading, setTriggerTime, setToast } = commonSlices.actions

export default commonSlices.reducer
