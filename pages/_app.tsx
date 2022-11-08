import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, useDispatch } from 'react-redux'
import { store } from 'src/store'
import { PropsWithChildren, useEffect } from 'react'
import { loadSession } from 'src/features/authentication/auth.slice'

const Layout = ({children}: PropsWithChildren) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSession());
  }, []);

  return (
    <>{children}</>
  )
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    )
}


