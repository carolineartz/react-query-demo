import React from 'react'

import ReactDOM from 'react-dom'

import { GlobalStyles } from './globalStyles'

import App from '@/App'
import { AxiosProvider } from '@/contexts/AxiosProvider'
import { QueryProvider } from '@/contexts/QueryProvider'
import reportWebVitals from '@/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <AxiosProvider>
      <QueryProvider>
        <GlobalStyles />
        <App />
      </QueryProvider>
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
