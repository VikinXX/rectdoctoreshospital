import global from "./Global";
import axios from "axios";

export default class ServiceHospitales  {
    
    getPromesa = new Promise(function(resolve, reject){
        let num = 0;
        if(num == 0 ){
            resolve("Todo ok")
        }else{
            reject("Todo mal")
        }
    })

    getHospitales = new Promise(function(resolve) {
        axios.get("https://apicorecrudhospitales2023.azurewebsites.net/" + "api/Hospitales").then((res) => {
            resolve(res.data)
        })
    })

    getHospital (idHospital) {
        return new Promise(function(resolve){
            axios.get("https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/DoctoresHospital/" + idHospital).then((res) => {
                resolve(res.data)
            })
        })
    }

    loadDoctores = (idHospital) => {
        return new Promise(function(resolve) {
            axios.get("https://apidoctoresroutes2023.azurewebsites.net/" + 'api/Doctores/DoctoresHospital/' + idHospital).then((res) => {
                resolve(res.data)
            })
        })
    }
}