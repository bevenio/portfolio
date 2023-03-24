import '@/assets/scss/index.scss'

import { createRoot } from 'react-dom/client'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

import { MainPage } from '@/components/pages/main'
import { store } from '@/store/store'

const appRootElementId = 'app'
const appRootElement = document.getElementById(appRootElementId)

if (appRootElement !== null) {
  createRoot(appRootElement).render(
    <>
      <Helmet>
        <title>Benjamin Brachmann - Software Engineer</title>
        <link rel="icon" type="image/png" href="./static/images/icons/icon-192x192.png" />
        <html lang={'en'} color-scheme={'light'} />
      </Helmet>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </>
  )
} else {
  throw new Error(`Root element "${appRootElementId}" for react-dom to render has not been not found`)
}
