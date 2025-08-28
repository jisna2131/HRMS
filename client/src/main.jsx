import { StrictMode } from 'react'

import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import store from './redux/Store'
import App from './App'

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>

)



