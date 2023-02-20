import * as React from 'react'
import { Provider } from 'react-redux'

import createStore from './createStore'

type Props = React.PropsWithChildren<{
  store: ReturnType<typeof createStore>
}>

function StoreProvider({ children, store }: Props) {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
