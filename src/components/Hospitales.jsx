import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Hospitales extends Component {

    state = {
        doctores: []
    }

    loadHospitales = () => {
        axios.get(Global.urlHospitales + 'api/Hospitales/' + this.props.idHospital).then((res) => {
            this.setState({ 
                doctores: res.data 
            })
        })
    }

    componentDidMount() {
        this.loadHospitales();
    }

    componentDidUpdate(prevProps) {
        if (this.props.idHospital !== prevProps.idHospital) {
            this.loadHospitales();
        }
    }

    render() {
        return (
        <div>
            <h1>Hospitales</h1>
            
        </div>
        )
    }
}
