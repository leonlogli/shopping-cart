import { addParameters, addDecorator } from '@storybook/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from '../src'
import store, { persistor } from '../src/store'
import { Wrapper, RouterMock } from './helpers'

import '../__mocks__/mockNextRouter'
import 'react-perfect-scrollbar/dist/css/styles.css'

addDecorator((storyFn) => (
  <RouterMock>
    <Wrapper>
      <Provider store={store}>
        <PersistGate loading={<App>{storyFn()}</App>} persistor={persistor}>
          <App>{storyFn()}</App>
        </PersistGate>
      </Provider>
    </Wrapper>
  </RouterMock>
))

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})
