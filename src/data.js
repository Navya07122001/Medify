import axios from "axios";
var url="https://meddata-backend.onrender.com/";
export const getStates=async()=>{
    try{
        const response=await axios.get(`${url}states`)
        const data1=response;
        console.log(data1)
        return data1.data;
    }
    catch(e)
    {
        console.error(e);
    }
}
export const getAllcities=async(state)=>{
    try{
        const response=await axios.get(`${url}cities/${state}`)
        const data1=response;
        return data1.data;
    }
    catch(e){
        console.error(e);
    }
}

export const getMedicalcentres=async(state,city)=>{
    try{
        const response=await axios.get(`${url}data?state=${state}&city=${city}`)
        const data1=response;
        return data1.data;
    }
    catch(e){
        console.error(e);
    }
}
