import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { Navigate } from 'react-router-dom';

export default class PeticionPost extends Component {

    cajaID = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    url = Global.urlHospitales;

    state = {
        mensaje: '',
        status: false
    }

    insertarHospital = (e) => {
        e.preventDefault();
        console.log("aqui")
        axios.post("https://apicorecrudhospitales2023.azurewebsites.net/api/Hospitales", {
            idHospital: this.cajaID.current.value,
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: this.cajaCamas.current.value
        }).then((res) => {
            this.setState({
                mensaje: "Insertado",
                status: true
            })
        })
    }

    render() {
        return (
        <div>
            {
                this.state.status &&
                <Navigate to='/hospitalescomponent' />
            }
            <h1>Petición POST</h1>
            <form onSubmit={this.insertarHospital}>
                <label>ID: <input type='text' ref={this.cajaID}/></label>
                <br />
                <label>Nombre: <input type='text' ref={this.cajaNombre}/></label>
                <br />
                <label>Dirección: <input type='text' ref={this.cajaDireccion}/></label>
                <br />
                <label>Teléfono: <input type='text' ref={this.cajaTelefono}/></label>
                <br />
                <label>Camas: <input type='text' ref={this.cajaCamas}/></label>
                <br />
                <button>Enviar</button>
            </form>
        </div>
        )
    }
}
