import { ThemeProvider } from 'styled-components'
import { theme } from '../GlobalStyles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from '../store/index'

const store = createStore(rootReducer)

export const decorators = [
  Story => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
]

export const parameters = {
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}
