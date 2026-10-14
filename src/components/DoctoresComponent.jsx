import React, { Component } from 'react'
import DoctorComponent from './DoctorComponent'
import ServiceHospitales from '../ServiceHospitales'

export default class DoctoresComponent extends Component {
    
    service = new ServiceHospitales();
    state = {
        doctores: [],
        doctor: [],
        idddoctor: -1
    }

    loadDoctores = (idHospital) => {
        this.service.loadDoctores().then((res) => {
            this.setState({
                doctores: res
            })
        })
    }

    componentDidMount() {
        this.service.loadDoctores(this.props.idHospital);
    }

    componentDidUpdate(prevProps) {
        if (this.props.idHospital !== prevProps.idHospital) {
            this.service.loadDoctores(this.props.idHospital);
        }
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
                            return(<li key={index}>{doctor.idDoctor}. {doctor.apellido}<button onClick={() => this.setState({ idddoctor: doctor.idDoctor })}>Ver detalles</button></li>)
                        })
                    }
                </ul>
            }
            {
                this.state.idddoctor !== -1 && 
                <DoctorComponent idDoctor={this.state.idddoctor} />
            }
        </div>
        )
    }
}
