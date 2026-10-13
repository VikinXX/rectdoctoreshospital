import React, { Component } from 'react'
import Menu from './Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Hospitales from './Hospitales'
import DoctoresComponent from './DoctoresComponent'
import { useParams } from 'react-router-dom'

export default class Router extends Component {
    render() {

        function DoctoresElement() {
            let {idHospital} = useParams();
            return(<DoctoresComponent idHospital={idHospital} />)
        }

        return (
        <div>
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/hospitales' element={<Hospitales />} />
                    <Route path='/doctores' element={<DoctoresComponent />} />
                    <Route path='/doctores/:idHospital' element={<DoctoresElement />} />
                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
