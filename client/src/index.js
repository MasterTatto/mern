import App from "./App";
import ReactDOM from 'react-dom/client';
import {createContext} from "react";
import {store} from "./store/store";
import './index.css'

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store: store
    }}>
        <App/>
    </Context.Provider>
)
