import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {CartProvider} from "./components/cartPage/CartContext";
import {createRoot} from "react-dom/client";

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<React.StrictMode>
        <Router>
            <CartProvider>
                <App />
            </CartProvider>
        </Router>
    </React.StrictMode>,)

