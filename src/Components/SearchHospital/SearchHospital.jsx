import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchResults from '../SearchResults/SearchResults';
import { getStates ,getAllcities,getMedicalcentres} from '../../data';
function SearchHospital() {
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [stateres,setStateRes]=useState([]);
    const [cityres,setCityRes]=useState([]);
    const [hospitals,setHospitals]=useState([])
    const handleSearch=async(state,city)=>{
        console.log(state+" "+city)
        const data=await getMedicalcentres(state,city);
        setHospitals(data)
        console.log(data)
        
    }
    useEffect(()=>{
        const fetchstatedata=async()=>{
            const data=await getStates();
            console.log(data)
            setStateRes(data)
        }
     fetchstatedata();
    },[]);
    useEffect(()=>{
        const getcitydata=async()=>{
            console.log(state)
            if(state.length>0)
            {
            const data=await getAllcities(state);
            console.log(data)
            setCityRes(data);
            }
        }
        getcitydata();

    },[state])
    return (
        <div>
            <div>
                <Navbar state={state} city={city} setState={setState} setCity={setCity} statelist={stateres} citylist={cityres} handleSearch={handleSearch}/>
                <SearchResults hospitals={hospitals} state={state}/>
            </div>
            
        </div>
    );
}

export default SearchHospital;