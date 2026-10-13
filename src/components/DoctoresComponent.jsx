import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import DoctorComponent from './DoctorComponent'

export default class DoctoresComponent extends Component {
    
    state = {
        doctores: [],
        doctor: []
    }

    loadDoctores = () => {
        axios.get(Global.urlDoctores + '/api/Doctores/DoctoresHospital/' + this.props.idHospital).then((res) => {
            this.setState({ 
                doctores: res.data 
            })
        })
    }

    componentDidMount() {
        this.loadDoctores();
    }

    componentDidUpdate(prevProps) {
        if (this.props.idHospital !== prevProps.idHospital) {
            this.loadDoctores();
        }
    }

    cargarInfoDoctor = (idDoctor) => {
        /*axios.get(Global.urlDoctores + 'api/Doctores/' + idDoctor).then((res) => {
            this.setState({
                doctor: res.data
            })
        })*/

        return(<DoctorComponent idDoctor={idDoctor} pintarInfo={this.pintarInfoDoctor} />)
    }

    pintarInfoDoctor = (doctor) => {
        this.setState({
            doctor: doctor
        })
        return(
            <div>
                <h1>Detalles del doctor</h1>
                <p>Id del doctor: {this.state.idDoctor}</p>
                <p>Apellido: {this.state.doctor.apellido}</p>
                <p>Especialidad: {this.state.doctor.especialidad}</p>
                <p>Salario: {this.state.doctor.salario}</p>
            </div>
        )
    }
        
    

    render() {
        return (
        <div>
            <h1>Doctores del hospital</h1>
            {
                this.state.doctores.length !== 0 &&
                <ul>
                    {
                        this.state.doctores.map((doctor, index) => {
                            return(<li key={index}>{doctor.idDoctor}. {doctor.apellido}<button onClick={() => this.cargarInfoDoctor(doctor.idDoctor)}>Ver detalles</button></li>)
                        })
                    }
                </ul>
            }
            {
                this.props.doctor.length !== 0 &&
                this.pintarInfoDoctor(this.props.doctor)
            }
        </div>
        )
    }
}
