import React, { Component } from 'react'
import ServiceEjemplo from '../ServiceEjemplo'

export default class EjemplosServiceComponent extends Component {
    
    service = new ServiceEjemplo();

    state = {
        mensaje1: "",
        mensaje2: "",
        comics: []
    }

    loadData = () => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia("Ortiz"),
            comics: this.service.getComics()
        })
    }

    componentDidMount = () => {
        this.loadData();
    }
    
    render() {
        return (
        <div>
            <h1>Ejemplo Service Component</h1>
            <h2>{this.state.mensaje1}</h2>
            <h3>{this.state.mensaje2}</h3>
            <h4>Hay {this.state.comics.length} comics</h4>
            <ul>
                {
                    this.state.comics.map((com, index) => {
                        return (<li key={index}>{com.titulo}<img src={com.imagen} style={{width: "160px", height: "200px" }}/></li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
