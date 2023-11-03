import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in from './Sign_in';
import DashBoard from './DashBoard';
import "./index.css"
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Sign_in />}></Route>
                    <Route  path="/DashBoard" element={<DashBoard />}></Route>
                    <Route  path="/Sign_in" element={<Sign_in />}></Route>
                </Routes>

            </BrowserRouter>

        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)