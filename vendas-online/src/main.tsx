import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GlobalProvider } from './share/hooks/useGlobalContext'
import { DataProvider } from './share/hooks/useDataContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </GlobalProvider>
)
