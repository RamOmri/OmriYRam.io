import React from 'react'
import { WebRouter } from './src/router'
import { createStore } from './src/state'
import StoreProvider from './src/state/StoreProvider'

const store = createStore()

export default function App() {
  return (
    <StoreProvider store={store}>
      <WebRouter />
    </StoreProvider>
  )
}
