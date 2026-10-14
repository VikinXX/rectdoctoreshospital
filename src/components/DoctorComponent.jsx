import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import DoctoresComponent from './DoctoresComponent'

export default class DoctorComponent extends Component {
    
    state = {
        doctor: []
    }
    
    loadDoctor = (idDoctor) => {
        axios.get(Global.urlDoctores + 'api/Doctores/' + idDoctor).then((res) => {
            this.setState({
                doctor: res.data
            })
        })
    }

    componentDidMount() {
        this.loadDoctor(this.props.idDoctor);
    }

    componentDidUpdate(prevProps) {
        if (this.props.idDoctor !== prevProps.idDoctor) {
            this.loadDoctor(this.props.idDoctor);
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles del doctor</h1>
                {
                    this.state.doctor &&
                    <div>
                        <p>Id del doctor: {this.state.doctor.idDoctor}</p>
                        <p>Apellido: {this.state.doctor.apellido}</p>
                        <p>Especialidad: {this.state.doctor.especialidad}</p>
                        <p>Salario: {this.state.doctor.salario}</p>
                    </div>
                }
                
            </div>
        )
    }
}
