import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import '@/assets/styles/app.css'
import App from './App'
import { ThemeProvider } from '@mui/material'
import MuiThemeConfig from './mui.config'
import { IntlProviderWrapper } from './utils/IntlContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={MuiThemeConfig}>
      <IntlProviderWrapper>
        <App />
      </IntlProviderWrapper>
    </ThemeProvider>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
