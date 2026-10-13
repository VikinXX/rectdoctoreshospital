import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class Menu extends Component {
    
    state = {
        hospitales: []
    }

    loadHospitales = () => {
        axios.get(Global.urlHospitales + 'api/Hospitales').then((res) => {
            this.setState({
                hospitales: res.data
            })
        })
    }

    componentDidMount() {
        this.loadHospitales();
    }
    
    render() {
        return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> <NavLink className="navbar-brand" href="#"> Navbar </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span
                        className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"> <NavLink className="nav-link" href="#"> Home <span
                                    className="sr-only">(current)</span> </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" href="#"> Features </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" href="#"> Pricing </NavLink> </li>
                    </ul>
                </div>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </NavLink>
                    <ul className="dropdown-menu">
            
                        {
            
                            this.state.hospitales.map((hospital, index) => {
                                return(<li key={index}><NavLink className='dropdown-item' to={'/doctores/' + hospital.idHospital}>{hospital.nombre}</NavLink></li>)
                            })
            
                        }
                    </ul>
                </li>
            </nav>
            
        </div>
        )
    }
}
