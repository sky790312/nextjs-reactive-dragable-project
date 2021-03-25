import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { initializeStore } from '@/store/index'
import { RootState } from '@/store/index'
import { theme } from '@/GlobalStyles'

export const withProviders = (
  component,
  initialState?: RootState,
): JSX.Element => {
  const mockStore = initializeStore(initialState)
  return (
    <Provider store={mockStore}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </Provider>
  )
}

export const mockNextRouter = () => {
  jest.mock('next/router', () => ({
    useRouter() {
      return {
        route: '',
        pathname: '',
        query: '',
        asPath: '',
      }
    },
  }))
}

export const customRender = (ui, options = {}) => render(ui, { ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
