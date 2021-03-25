import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { GlobalStyles, theme } from '@/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
