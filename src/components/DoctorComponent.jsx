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
        return(<DoctoresComponent doctor={this.state.doctor}/>)
    }

    componentDidMount() {
        this.loadDoctor(this.props.idDoctor);
    }

    render() {
        return (
            <div></div>
        )
    }
}
