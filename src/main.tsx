import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './shared/components/Loading/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import persistStore from 'redux-persist/es/persistStore'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
