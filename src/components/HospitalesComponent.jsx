import React, { Component } from 'react'
import ServiceHospitales from '../ServiceHospitales'

export default class HospitalesComponent extends Component {

    service = new ServiceHospitales();
    state = {
        hospitales: [],
        doctores: []
    }

    loadHospitales = () => {
        this.service.getHospitales.then((res) => {
            this.setState({
                hospitales: res
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    loadHospital = (idHospital) => {
        this.service.getHospital(idHospital).then((res) => {
            this.setState({
                doctores: res
            })
            
        })
    }

    render() {
        return (
        <div>
            <h1>Hospitales</h1>
            {
                this.state.hospitales &&
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Camas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.hospitales.map((hospital, index) => {
                            return(
                            <tr key={index}>
                                <td>{hospital.idHospital}</td>
                                <td>{hospital.nombre}</td>
                                <td>{hospital.direccion}</td>
                                <td>{hospital.telefono}</td>
                                <td>{hospital.camas}</td>
                            </tr>)
                        })
                    }
                    <button onClick={this.loadHospital(19)}></button>
                </tbody>
            </table>
            }
            {
                this.state.doctores &&
                <ul>
                    {
                        this.state.doctores.map((doc, index) => {
                            return(<li key={index}>{doc.apellido}</li>)
                        })
                    }
                </ul>
            }
        </div>
        )
    }
}
