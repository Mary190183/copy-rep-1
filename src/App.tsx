import React from 'react'
import './Apps.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ItemsPage} from './pages/items-page/ItemsPage'
import {CartPage} from './pages/cart-page/CartPage'
import {NotFoundPage} from './pages/not-found-page/NotFoundPage'
import {Header} from './components/common/header/Header'
import {Footer} from './components/common/footer/Footer'
import { ItemPage } from './pages/item-page/ItemPage'
import {ShopState} from './core/state/ShopState'


export const App = (): JSX.Element => {
    const state: React.MutableRefObject<ShopState> = React.useRef<ShopState>(new ShopState())

    return (
        <Router>
            <section className="wrapper">
                <Header/>
                <main className="wrapper__main">
                    <Routes>
                        <Route path="/" element={<ItemsPage state={state.current}/>}/>
                        <Route path="/cart" element={<CartPage state={state.current}/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                        <Route path="/products/:id" element={<ItemPage />} />
                    </Routes>
                </main>
                < Footer/>
            </section>
        </Router>
    )
}
